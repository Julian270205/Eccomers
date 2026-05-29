const prisma = require('../config/database');

const findByCode = (code) => prisma.promotion.findUnique({ where: { code }, include: { products: { include: { product: true } } } });
const findAll = () => prisma.promotion.findMany({ orderBy: { createdAt: 'desc' }, include: { products: { include: { product: true } } } });
const findActive = () => prisma.promotion.findMany({ where: { isActive: true, startsAt: { lte: new Date() }, endsAt: { gte: new Date() } } });
const findById = (id) => prisma.promotion.findUnique({ where: { id: parseInt(id) }, include: { products: { include: { product: true } } } });
const create = (data) => prisma.promotion.create({ data });
const update = (id, data) => prisma.promotion.update({ where: { id: parseInt(id) }, data });
const remove = (id) => prisma.promotion.delete({ where: { id: parseInt(id) } });
const incrementUsed = (id) => prisma.promotion.update({ where: { id: parseInt(id) }, data: { usedCount: { increment: 1 } } });

module.exports = { findByCode, findAll, findActive, findById, create, update, remove, incrementUsed };
