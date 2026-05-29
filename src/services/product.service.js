const productRepo = require('../repositories/product.repository');
const { getActiveDiscount } = require('./promotion.service');

const computePriceInfo = (product) => {
  const base = parseFloat(product.basePrice);
  const discount = getActiveDiscount(product);
  if (discount) {
    const finalPrice = discount.type === 'percentage'
      ? base * (1 - parseFloat(discount.value) / 100)
      : base - parseFloat(discount.value);
    return { originalPrice: base, finalPrice: Math.max(0, finalPrice), hasDiscount: true, discountLabel: discount.name };
  }
  return { originalPrice: base, finalPrice: base, hasDiscount: false };
};

const getProducts = async (filters) => {
  const products = await productRepo.findAll(filters);
  return products.map(p => ({ ...p, priceInfo: computePriceInfo(p) }));
};

const getProductBySlug = async (slug) => {
  const product = await productRepo.findBySlug(slug);
  if (!product || !product.isActive) return null;
  return { ...product, priceInfo: computePriceInfo(product) };
};

const getProductById = async (id) => {
  const product = await productRepo.findById(id);
  if (!product) return null;
  return { ...product, priceInfo: computePriceInfo(product) };
};

const getFeaturedProducts = (limit = 8) => getProducts({ isFeatured: true }).then(p => p.slice(0, limit));
const getProductsAdmin = () => productRepo.findAllAdmin();
const getLowStockProducts = (threshold) => productRepo.getLowStock(threshold);

const createProduct = async (data, sizes) => {
  const product = await productRepo.create({
    name: data.name,
    description: data.description,
    category: data.category,
    basePrice: parseFloat(data.basePrice),
    imageUrl: data.imageUrl || null,
    isFeatured: data.isFeatured === 'true' || data.isFeatured === true,
    slug: data.slug || data.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    variants: { create: sizes.map(s => ({ size: s.size, stock: parseInt(s.stock), sku: `${data.slug?.substring(0,8).toUpperCase() || 'PROD'}-${s.size}` })) },
  });
  return product;
};

const updateProduct = (id, data) => productRepo.update(id, {
  name: data.name,
  description: data.description,
  category: data.category,
  basePrice: parseFloat(data.basePrice),
  imageUrl: data.imageUrl,
  isFeatured: data.isFeatured === 'true' || data.isFeatured === true,
  isActive: data.isActive !== 'false',
});

const deleteProduct = (id) => productRepo.softDelete(id);

module.exports = { getProducts, getProductBySlug, getProductById, getFeaturedProducts, getProductsAdmin, getLowStockProducts, createProduct, updateProduct, deleteProduct, computePriceInfo };
