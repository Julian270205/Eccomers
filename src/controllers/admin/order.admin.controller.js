const orderService = require('../../services/order.service');
const { ORDER_STATUS } = require('../../utils/constants');

const index = async (req, res) => {
  const orders = await orderService.getAllOrders({ status: req.query.status });
  res.render('admin/orders/index', { title: 'Pedidos', orders, ORDER_STATUS, currentStatus: req.query.status || '' });
};

const detail = async (req, res) => {
  const order = await orderService.getOrderById(req.params.id);
  if (!order) return res.redirect('/admin/orders');
  res.render('admin/orders/detail', { title: `Pedido #${order.id}`, order, ORDER_STATUS });
};

const updateStatus = async (req, res) => {
  try {
    await orderService.updateOrderStatus(req.params.id, req.body.status);
    req.flash('success', 'Estado actualizado');
  } catch (err) { req.flash('error', err.message); }
  res.redirect(`/admin/orders/${req.params.id}`);
};

const confirmByToken = async (req, res) => {
  try {
    await orderService.confirmOrderByToken(req.query.token);
    req.flash('success', '✅ Pedido confirmado como pagado');
  } catch (err) { req.flash('error', err.message); }
  res.redirect(`/admin/orders/${req.params.id}`);
};

module.exports = { index, detail, updateStatus, confirmByToken };
