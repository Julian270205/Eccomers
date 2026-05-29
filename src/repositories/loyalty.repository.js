const prisma = require('../config/database');

const addEntry = (userId, orderId, type, points, description) =>
  prisma.loyaltyLedger.create({ data: { userId: parseInt(userId), orderId: orderId ? parseInt(orderId) : null, type, points, description } });

const getUserLedger = (userId) => prisma.loyaltyLedger.findMany({
  where: { userId: parseInt(userId) },
  orderBy: { createdAt: 'desc' },
  include: { order: true },
});

module.exports = { addEntry, getUserLedger };
