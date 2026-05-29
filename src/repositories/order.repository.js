const prisma = require('../config/database');

const create = (data) => prisma.order.create({
  data,
  include: { items: { include: { product: true, variant: true } }, promotion: true, user: true },
});

const findById = (id) => prisma.order.findUnique({
  where: { id: parseInt(id) },
  include: { items: { include: { product: true, variant: true } }, promotion: true, user: true },
});

const findByToken = (token) => prisma.order.findUnique({
  where: { confirmToken: token },
  include: { items: { include: { product: true, variant: true } }, user: true },
});

const findByUserId = (userId) => prisma.order.findMany({
  where: { userId: parseInt(userId) },
  include: { items: { include: { product: true } } },
  orderBy: { createdAt: 'desc' },
});

const findAll = (filters = {}) => {
  const where = {};
  if (filters.status) where.status = filters.status;
  if (filters.startDate) where.createdAt = { gte: new Date(filters.startDate) };
  return prisma.order.findMany({
    where,
    include: { items: true, user: true },
    orderBy: { createdAt: 'desc' },
    take: filters.limit ? parseInt(filters.limit) : undefined,
  });
};

const updateStatus = (id, status) => prisma.order.update({ where: { id: parseInt(id) }, data: { status } });
const updatePayment = (id, paymentStatus) => prisma.order.update({ where: { id: parseInt(id) }, data: { paymentStatus } });
const confirm = (id) => prisma.order.update({ where: { id: parseInt(id) }, data: { status: 'confirmed', paymentStatus: 'paid', confirmedAt: new Date(), confirmToken: null } });

const getSalesStats = async (startDate, endDate) => {
  const orders = await prisma.order.findMany({
    where: { status: { in: ['confirmed', 'processing', 'shipped', 'delivered'] }, createdAt: { gte: startDate, lte: endDate } },
    include: { items: true },
  });
  return orders;
};

module.exports = { create, findById, findByToken, findByUserId, findAll, updateStatus, updatePayment, confirm, getSalesStats };
