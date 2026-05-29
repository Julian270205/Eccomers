const inventoryRepo = require('../repositories/inventory.repository');

const checkStock = async (variantId, quantity) => {
  const variant = await inventoryRepo.findVariant(variantId);
  if (!variant) throw new Error('Variante de producto no encontrada');
  if (variant.stock < quantity) throw new Error(`Solo quedan ${variant.stock} unidades de la talla ${variant.size}`);
  return variant;
};

const reserveStock = async (items) => {
  for (const item of items) {
    await checkStock(item.variantId, item.quantity);
  }
};

const deductStock = async (items) => {
  for (const item of items) {
    await inventoryRepo.decrementStock(item.variantId, item.quantity);
  }
};

const updateVariantStock = (variantId, stock) => inventoryRepo.updateStock(variantId, stock);
const updateVariant = (variantId, data) => inventoryRepo.updateVariant(variantId, data);
const createVariant = (data) => inventoryRepo.createVariant(data);
const getVariant = (id) => inventoryRepo.findVariant(id);

module.exports = { checkStock, reserveStock, deductStock, updateVariantStock, updateVariant, createVariant, getVariant };
