const { buildWhatsAppMessage } = require('../utils/helpers');

const buildWhatsAppLink = (order) => {
  const phone = process.env.WHATSAPP_NUMBER || '573001234567';
  const message = buildWhatsAppMessage(order, process.env.APP_BASE_URL || 'http://localhost:3000');
  return `https://wa.me/${phone}?text=${message}`;
};

module.exports = { buildWhatsAppLink };
