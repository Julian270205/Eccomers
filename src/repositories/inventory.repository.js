const prisma = require('../config/database');

const findVariant = (id) => prisma.productVariant.findUnique({ where: { id: parseInt(id) }, include: { product: true } });
const findVariantByProductAndSize = (productId, size) => prisma.productVariant.findUnique({ where: { productId_size: { productId: parseInt(productId), size } } });
const updateStock = (id, stock) => prisma.productVariant.update({ where: { id: parseInt(id) }, data: { stock: parseInt(stock) } });
const decrementStock = (id, qty) => prisma.productVariant.update({ where: { id: parseInt(id) }, data: { stock: { decrement: qty } } });
const incrementStock = (id, qty) => prisma.productVariant.update({ where: { id: parseInt(id) }, data: { stock: { increment: qty } } });
const createVariant = (data) => prisma.productVariant.create({ data });
const updateVariant = (id, data) => prisma.productVariant.update({ where: { id: parseInt(id) }, data });

module.exports = { findVariant, findVariantByProductAndSize, updateStock, decrementStock, incrementStock, createVariant, updateVariant };
