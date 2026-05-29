const loyaltyRepo = require('../repositories/loyalty.repository');
const userRepo = require('../repositories/user.repository');
const { LOYALTY_RATE } = require('../utils/constants');

const calculatePointsEarned = (total) => Math.floor(total * LOYALTY_RATE);

const awardPoints = async (userId, orderId, total) => {
  const points = calculatePointsEarned(total);
  if (points <= 0) return 0;
  await loyaltyRepo.addEntry(userId, orderId, 'earned', points, `Puntos ganados por pedido #${orderId}`);
  await userRepo.updatePoints(userId, points);
  return points;
};

const redeemPoints = async (userId, orderId, points, discountAmount) => {
  if (points <= 0) return;
  const user = await userRepo.findById(userId);
  if (user.loyaltyPoints < points) throw new Error('Puntos insuficientes');
  await loyaltyRepo.addEntry(userId, orderId, 'redeemed', -points, `Puntos canjeados en pedido #${orderId} (-$${discountAmount})`);
  await userRepo.updatePoints(userId, -points);
};

const getUserLedger = (userId) => loyaltyRepo.getUserLedger(userId);

const pointsToAmount = (points) => points * 10; // 1 punto = COP 10

module.exports = { calculatePointsEarned, awardPoints, redeemPoints, getUserLedger, pointsToAmount };
