const dayjs = require('dayjs');
require('dayjs/locale/es');
dayjs.locale('es');

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(amount);
};

const formatDate = (date, format = 'D [de] MMMM, YYYY') => dayjs(date).format(format);

const generateOrderConfirmToken = () => {
  return require('crypto').randomBytes(32).toString('hex');
};

const buildWhatsAppMessage = (order, appBaseUrl) => {
  const lines = [
    `🌸 *Pedido Jhoana Rosales Boutique*`,
    `Número de pedido: #${order.id}`,
    ``,
    `*Productos:*`,
    ...order.items.map(i => `- ${i.product.name} (Talla: ${i.size}) x${i.quantity} → ${formatCurrency(i.unitPrice * i.quantity)}`),
    ``,
    `*Subtotal:* ${formatCurrency(order.subtotal)}`,
    order.discountAmount > 0 ? `*Descuento:* -${formatCurrency(order.discountAmount)}` : null,
    `*Total:* ${formatCurrency(order.total)}`,
    ``,
    `*Datos de envío:*`,
    `Nombre: ${order.shippingName}`,
    `Dirección: ${order.shippingAddress}`,
    `Ciudad: ${order.shippingCity}`,
    `Teléfono: ${order.shippingPhone}`,
    ``,
    `*Confirmar pago (admin):*`,
    `${appBaseUrl}/admin/orders/${order.id}/confirm?token=${order.confirmToken}`,
  ].filter(Boolean);
  return encodeURIComponent(lines.join('\n'));
};

const paginateArray = (array, page = 1, perPage = 12) => {
  const total = array.length;
  const totalPages = Math.ceil(total / perPage);
  const offset = (page - 1) * perPage;
  return { data: array.slice(offset, offset + perPage), total, totalPages, currentPage: page, perPage };
};

module.exports = { formatCurrency, formatDate, generateOrderConfirmToken, buildWhatsAppMessage, paginateArray };
