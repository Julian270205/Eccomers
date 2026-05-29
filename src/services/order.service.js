const orderRepo = require('../repositories/order.repository');
const cartService = require('./cart.service');
const stockService = require('./stock.service');
const loyaltyService = require('./loyalty.service');
const promotionService = require('./promotion.service');
const { generateOrderConfirmToken } = require('../utils/helpers');
const { ROLES } = require('../utils/constants');
const prisma = require('../config/database');

const createOrder = async (userId, shippingData, couponCode = null) => {
  const cartItems = await cartService.getCartItemsForOrder(userId);
  if (cartItems.length === 0) throw new Error('El carrito está vacío');

  await stockService.reserveStock(cartItems);

  const subtotal = cartItems.reduce((acc, i) => acc + i.unitPrice * i.quantity, 0);
  let discountAmount = 0;
  let promotionId = null;

  if (couponCode) {
    const promo = await promotionService.validateCoupon(couponCode, subtotal);
    discountAmount = promotionService.calculateDiscount(promo, subtotal);
    promotionId = promo.id;
  }

  const total = Math.max(0, subtotal - discountAmount);
  const confirmToken = generateOrderConfirmToken();
  const pointsEarned = userId ? loyaltyService.calculatePointsEarned(total) : 0;

  const order = await prisma.$transaction(async (tx) => {
    const newOrder = await tx.order.create({
      data: {
        userId: userId ? parseInt(userId) : null,
        status: 'pending_whatsapp_confirmation',
        paymentStatus: 'pending',
        paymentMethod: 'whatsapp',
        subtotal,
        discountAmount,
        total,
        promotionId,
        pointsEarned,
        shippingName: shippingData.name,
        shippingEmail: shippingData.email,
        shippingPhone: shippingData.phone,
        shippingAddress: shippingData.address,
        shippingCity: shippingData.city,
        shippingNotes: shippingData.notes || null,
        confirmToken,
        items: { create: cartItems.map(i => ({ productId: i.productId, variantId: i.variantId, productName: i.productName, size: i.size, quantity: i.quantity, unitPrice: i.unitPrice })) },
      },
      include: { items: { include: { product: true, variant: true } }, promotion: true, user: true },
    });

    // Deduct stock
    for (const item of cartItems) {
      await tx.productVariant.update({ where: { id: item.variantId }, data: { stock: { decrement: item.quantity } } });
      await tx.product.update({ where: { id: item.productId }, data: { totalSold: { increment: item.quantity } } });
    }

    if (promotionId) await tx.promotion.update({ where: { id: promotionId }, data: { usedCount: { increment: 1 } } });

    return newOrder;
  });

  await cartService.clearCart(userId);
  if (userId && pointsEarned > 0) await loyaltyService.awardPoints(userId, order.id, total);

  return order;
};

const confirmOrderByToken = async (token) => {
  const order = await orderRepo.findByToken(token);
  if (!order) throw new Error('Pedido no encontrado');
  if (order.status !== 'pending_whatsapp_confirmation') throw new Error('Este pedido ya fue procesado');
  return orderRepo.confirm(order.id);
};

const getOrderById = (id) => orderRepo.findById(id);
const getOrdersByUser = (userId) => orderRepo.findByUserId(userId);
const getAllOrders = (filters) => orderRepo.findAll(filters);
const updateOrderStatus = (id, status) => orderRepo.updateStatus(id, status);
const getSalesStats = (startDate, endDate) => orderRepo.getSalesStats(startDate, endDate);

module.exports = { createOrder, confirmOrderByToken, getOrderById, getOrdersByUser, getAllOrders, updateOrderStatus, getSalesStats };
