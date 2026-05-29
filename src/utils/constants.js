const CATEGORIES = ['Camisa', 'Blusa', 'Vestido', 'Falda', 'Shorts', 'Pantalones', 'Jeans', 'Enterizos'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL'];
const ROLES = { ADMIN: 'admin', CLIENT: 'client' };
const ORDER_STATUS = {
  PENDING_WHATSAPP: 'pending_whatsapp_confirmation',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};
const PAYMENT_STATUS = { PENDING: 'pending', PAID: 'paid', FAILED: 'failed', REFUNDED: 'refunded' };
const LOYALTY_RATE = 1 / 10000; // 1 punto por cada COP 10.000
const CALI_CITY = 'Cali';
const LOW_STOCK_THRESHOLD = 3;

module.exports = { CATEGORIES, SIZES, ROLES, ORDER_STATUS, PAYMENT_STATUS, LOYALTY_RATE, CALI_CITY, LOW_STOCK_THRESHOLD };
