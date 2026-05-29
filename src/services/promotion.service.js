const promotionRepo = require('../repositories/promotion.repository');

const getActiveDiscount = (product) => {
  if (!product.promotions || product.promotions.length === 0) return null;
  const now = new Date();
  const active = product.promotions.find(pp => {
    const promo = pp.promotion;
    return promo?.isActive && new Date(promo.startsAt) <= now && new Date(promo.endsAt) >= now;
  });
  return active?.promotion || null;
};

const validateCoupon = async (code, orderAmount) => {
  const promo = await promotionRepo.findByCode(code);
  if (!promo) throw new Error('Cupón no válido');
  const now = new Date();
  if (!promo.isActive) throw new Error('Este cupón no está activo');
  if (new Date(promo.startsAt) > now) throw new Error('Este cupón aún no está disponible');
  if (new Date(promo.endsAt) < now) throw new Error('Este cupón ha expirado');
  if (promo.maxUses && promo.usedCount >= promo.maxUses) throw new Error('Este cupón ha alcanzado su límite de usos');
  if (parseFloat(promo.minOrderAmount) > orderAmount) throw new Error(`Monto mínimo para usar este cupón: ${promo.minOrderAmount}`);
  return promo;
};

const calculateDiscount = (promo, subtotal) => {
  if (promo.type === 'percentage') return subtotal * (parseFloat(promo.value) / 100);
  if (promo.type === 'fixed_amount') return Math.min(parseFloat(promo.value), subtotal);
  return 0;
};

const applyPromotionToProduct = (basePrice, promo) => {
  if (!promo) return { finalPrice: basePrice, discount: 0 };
  const discount = calculateDiscount(promo, basePrice);
  return { finalPrice: Math.max(0, basePrice - discount), discount };
};

const getAllPromotions = () => promotionRepo.findAll();
const getPromotionById = (id) => promotionRepo.findById(id);
const createPromotion = (data) => promotionRepo.create(data);
const updatePromotion = (id, data) => promotionRepo.update(id, data);
const deletePromotion = (id) => promotionRepo.remove(id);
const incrementUsed = (id) => promotionRepo.incrementUsed(id);

module.exports = { getActiveDiscount, validateCoupon, calculateDiscount, applyPromotionToProduct, getAllPromotions, getPromotionById, createPromotion, updatePromotion, deletePromotion, incrementUsed };
