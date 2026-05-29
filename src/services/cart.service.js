const cartRepo = require('../repositories/cart.repository');
const stockService = require('./stock.service');
const { computePriceInfo } = require('./product.service');

const getCart = async (userId) => {
  const cart = await cartRepo.findByUserId(userId);
  if (!cart) return { items: [], subtotal: 0, itemCount: 0 };
  return enrichCart(cart);
};

const enrichCart = (cart) => {
  const items = cart.items.map(item => {
    const priceInfo = computePriceInfo(item.product);
    return { ...item, effectivePrice: priceInfo.finalPrice, lineTotal: priceInfo.finalPrice * item.quantity, priceInfo };
  });
  const subtotal = items.reduce((acc, i) => acc + i.lineTotal, 0);
  return { ...cart, items, subtotal, itemCount: items.reduce((acc, i) => acc + i.quantity, 0) };
};

const addToCart = async (userId, productId, variantId, quantity = 1, unitPrice) => {
  await stockService.checkStock(variantId, quantity);
  const cart = await cartRepo.getOrCreate(userId);
  await cartRepo.addItem(cart.id, parseInt(productId), parseInt(variantId), parseInt(quantity), unitPrice);
  return getCart(userId);
};

const updateCartItem = async (userId, itemId, quantity) => {
  const cart = await cartRepo.findByUserId(userId);
  const item = cart?.items.find(i => i.id === parseInt(itemId));
  if (!item) throw new Error('Item no encontrado en el carrito');
  await stockService.checkStock(item.variantId, quantity);
  await cartRepo.updateItem(parseInt(itemId), parseInt(quantity));
  return getCart(userId);
};

const removeFromCart = async (userId, itemId) => {
  await cartRepo.removeItem(parseInt(itemId));
  return getCart(userId);
};

const clearCart = async (userId) => {
  const cart = await cartRepo.findByUserId(userId);
  if (cart) await cartRepo.clearCart(cart.id);
};

const getCartItemsForOrder = async (userId) => {
  const cart = await getCart(userId);
  return cart.items.map(i => ({
    productId: i.productId,
    variantId: i.variantId,
    productName: i.product.name,
    size: i.variant.size,
    quantity: i.quantity,
    unitPrice: i.effectivePrice,
  }));
};

module.exports = { getCart, addToCart, updateCartItem, removeFromCart, clearCart, getCartItemsForOrder };
