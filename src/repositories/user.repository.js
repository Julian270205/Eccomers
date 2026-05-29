const prisma = require('../config/database');

const findByEmail = (email) => prisma.user.findUnique({ where: { email } });
const findById = (id) => prisma.user.findUnique({ where: { id: parseInt(id) } });
const create = (data) => prisma.user.create({ data });
const update = (id, data) => prisma.user.update({ where: { id: parseInt(id) }, data });
const updatePoints = (id, points) => prisma.user.update({ where: { id: parseInt(id) }, data: { loyaltyPoints: { increment: points } } });

module.exports = { findByEmail, findById, create, update, updatePoints };
