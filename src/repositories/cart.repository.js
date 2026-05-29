const prisma = require('../config/database');

const findByUserId = (userId) => prisma.cart.findUnique({
  where: { userId: parseInt(userId) },
  include: {
    items: {
      include: {
        product: { include: { promotions: { include: { promotion: true }, where: { promotion: { isActive: true, startsAt: { lte: new Date() }, endsAt: { gte: new Date() } } } } } },
        variant: true,
      },
    },
  },
});

const getOrCreate = async (userId) => {
  let cart = await findByUserId(userId);
  if (!cart) cart = await prisma.cart.create({ data: { userId: parseInt(userId) }, include: { items: true } });
  return findByUserId(userId);
};

const addItem = (cartId, productId, variantId, quantity, unitPrice) =>
  prisma.cartItem.upsert({
    where: { cartId_variantId: { cartId, variantId } },
    update: { quantity: { increment: quantity } },
    create: { cartId, productId, variantId, quantity, unitPrice },
  });

const updateItem = (id, quantity) => prisma.cartItem.update({ where: { id }, data: { quantity } });
const removeItem = (id) => prisma.cartItem.delete({ where: { id } });
const clearCart = (cartId) => prisma.cartItem.deleteMany({ where: { cartId } });

module.exports = { findByUserId, getOrCreate, addItem, updateItem, removeItem, clearCart };
