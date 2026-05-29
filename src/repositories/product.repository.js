const prisma = require('../config/database');

const findAll = (filters = {}) => {
  const where = { isActive: true };
  if (filters.category) where.category = filters.category;
  if (filters.isFeatured !== undefined) where.isFeatured = filters.isFeatured;
  if (filters.search) where.name = { contains: filters.search };
  if (filters.minPrice || filters.maxPrice) {
    where.basePrice = {};
    if (filters.minPrice) where.basePrice.gte = parseFloat(filters.minPrice);
    if (filters.maxPrice) where.basePrice.lte = parseFloat(filters.maxPrice);
  }

  const orderBy = {};
  switch (filters.sort) {
    case 'price_asc': orderBy.basePrice = 'asc'; break;
    case 'price_desc': orderBy.basePrice = 'desc'; break;
    case 'best_sellers': orderBy.totalSold = 'desc'; break;
    case 'featured': orderBy.isFeatured = 'desc'; break;
    default: orderBy.createdAt = 'desc';
  }

  return prisma.product.findMany({
    where,
    orderBy,
    include: {
      variants: true,
      promotions: { include: { promotion: true }, where: { promotion: { isActive: true, startsAt: { lte: new Date() }, endsAt: { gte: new Date() } } } },
    },
  });
};

const findBySlug = (slug) => prisma.product.findUnique({
  where: { slug },
  include: {
    variants: { orderBy: { size: 'asc' } },
    promotions: { include: { promotion: true }, where: { promotion: { isActive: true, startsAt: { lte: new Date() }, endsAt: { gte: new Date() } } } },
  },
});

const findById = (id) => prisma.product.findUnique({
  where: { id: parseInt(id) },
  include: { variants: { orderBy: { size: 'asc' } }, promotions: { include: { promotion: true } } },
});

const create = (data) => prisma.product.create({ data, include: { variants: true } });
const update = (id, data) => prisma.product.update({ where: { id: parseInt(id) }, data });
const softDelete = (id) => prisma.product.update({ where: { id: parseInt(id) }, data: { isActive: false } });
const incrementSold = (id, qty) => prisma.product.update({ where: { id: parseInt(id) }, data: { totalSold: { increment: qty } } });

const findAllAdmin = () => prisma.product.findMany({
  include: { variants: true },
  orderBy: { createdAt: 'desc' },
});

const getLowStock = (threshold = 3) => prisma.productVariant.findMany({
  where: { stock: { lte: threshold } },
  include: { product: true },
  orderBy: { stock: 'asc' },
});

module.exports = { findAll, findBySlug, findById, create, update, softDelete, incrementSold, findAllAdmin, getLowStock };
