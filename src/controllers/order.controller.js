const orderService = require('../services/order.service');
const loyaltyService = require('../services/loyalty.service');
const userRepo = require('../repositories/user.repository');

const myOrders = async (req, res) => {
  try {
    if (!req.session.user) return res.redirect('/auth/login');
    const orders = await orderService.getOrdersByUser(req.session.user.id);
    const user = await userRepo.findById(req.session.user.id);
    const ledger = await loyaltyService.getUserLedger(req.session.user.id);
    res.render('pages/account/orders', { title: 'Mis Pedidos', orders, user, ledger });
  } catch (err) { console.error(err); res.redirect('/'); }
};

module.exports = { myOrders };
