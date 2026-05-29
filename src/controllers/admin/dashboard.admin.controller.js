const orderService = require('../../services/order.service');
const productService = require('../../services/product.service');
const { LOW_STOCK_THRESHOLD } = require('../../utils/constants');
const dayjs = require('dayjs');

const dashboard = async (req, res) => {
  try {
    const now = dayjs();
    const startOfDay = now.startOf('day').toDate();
    const startOfWeek = now.startOf('week').toDate();
    const startOfMonth = now.startOf('month').toDate();
    const startOfYear = now.startOf('year').toDate();

    const [allOrders, lowStock] = await Promise.all([
      orderService.getAllOrders({}),
      productService.getLowStockProducts(LOW_STOCK_THRESHOLD),
    ]);

    const confirmed = allOrders.filter(o => ['confirmed','processing','shipped','delivered'].includes(o.status));
    const totalRevenue = confirmed.reduce((acc, o) => acc + parseFloat(o.total), 0);
    const todayRevenue = confirmed.filter(o => new Date(o.createdAt) >= startOfDay).reduce((acc, o) => acc + parseFloat(o.total), 0);
    const weekRevenue = confirmed.filter(o => new Date(o.createdAt) >= startOfWeek).reduce((acc, o) => acc + parseFloat(o.total), 0);
    const monthRevenue = confirmed.filter(o => new Date(o.createdAt) >= startOfMonth).reduce((acc, o) => acc + parseFloat(o.total), 0);

    // Daily chart (last 30 days)
    const last30 = [];
    for (let i = 29; i >= 0; i--) {
      const date = now.subtract(i, 'day');
      const dayStart = date.startOf('day').toDate();
      const dayEnd = date.endOf('day').toDate();
      const dayOrders = confirmed.filter(o => { const d = new Date(o.createdAt); return d >= dayStart && d <= dayEnd; });
      last30.push({ date: date.format('DD/MM'), revenue: dayOrders.reduce((acc, o) => acc + parseFloat(o.total), 0), count: dayOrders.length });
    }

    // Monthly chart (last 12 months)
    const last12Months = [];
    for (let i = 11; i >= 0; i--) {
      const month = now.subtract(i, 'month');
      const mStart = month.startOf('month').toDate();
      const mEnd = month.endOf('month').toDate();
      const mOrders = confirmed.filter(o => { const d = new Date(o.createdAt); return d >= mStart && d <= mEnd; });
      last12Months.push({ label: month.format('MMM YY'), revenue: mOrders.reduce((acc, o) => acc + parseFloat(o.total), 0) });
    }

    const recentOrders = allOrders.slice(0, 10);
    const pendingCount = allOrders.filter(o => o.status === 'pending_whatsapp_confirmation').length;

    res.render('admin/dashboard', {
      title: 'Dashboard',
      stats: { totalRevenue, todayRevenue, weekRevenue, monthRevenue, totalOrders: allOrders.length, pendingCount },
      last30, last12Months, recentOrders, lowStock,
    });
  } catch (err) { console.error(err); res.status(500).send('Error en dashboard'); }
};

module.exports = { dashboard };
