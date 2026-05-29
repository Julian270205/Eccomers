const cartService = require('../services/cart.service');
const orderService = require('../services/order.service');
const promotionService = require('../services/promotion.service');
const whatsappService = require('../services/whatsapp.service');
const { CALI_CITY } = require('../utils/constants');

const showCheckout = async (req, res) => {
  try {
    if (!req.session.user) { req.flash('info', 'Inicia sesión para completar tu compra'); return res.redirect('/auth/login'); }
    const cart = await cartService.getCart(req.session.user.id);
    if (!cart.items.length) { req.flash('error', 'Tu carrito está vacío'); return res.redirect('/carrito'); }
    const user = req.session.user;
    res.render('pages/checkout', { title: 'Checkout', cart, user, CALI_CITY });
  } catch (err) { console.error(err); req.flash('error', 'Error al cargar el checkout'); res.redirect('/carrito'); }
};

const validateCoupon = async (req, res) => {
  try {
    const { code, subtotal } = req.body;
    const promo = await promotionService.validateCoupon(code, parseFloat(subtotal));
    const discount = promotionService.calculateDiscount(promo, parseFloat(subtotal));
    res.json({ success: true, discount, promotionId: promo.id, promotionName: promo.name });
  } catch (err) { res.json({ success: false, message: err.message }); }
};

const placeOrder = async (req, res) => {
  try {
    if (!req.session.user) return res.redirect('/auth/login');
    const { name, email, phone, address, city, notes, couponCode } = req.body;
    const order = await orderService.createOrder(req.session.user.id, { name, email, phone, address, city, notes }, couponCode);
    const waLink = whatsappService.buildWhatsAppLink(order);
    res.render('pages/order-confirmation', { title: 'Pedido Recibido', order, waLink });
  } catch (err) {
    console.error(err);
    req.flash('error', err.message || 'Error al procesar el pedido');
    res.redirect('/checkout');
  }
};

module.exports = { showCheckout, validateCoupon, placeOrder };
