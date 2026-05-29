const promotionService = require('../../services/promotion.service');

const index = async (req, res) => {
  const promotions = await promotionService.getAllPromotions();
  res.render('admin/promotions/index', { title: 'Promociones', promotions });
};

const showCreate = (req, res) => res.render('admin/promotions/create', { title: 'Nueva Promoción' });

const create = async (req, res) => {
  try {
    await promotionService.createPromotion({ ...req.body, value: parseFloat(req.body.value), minOrderAmount: parseFloat(req.body.minOrderAmount || 0), maxUses: req.body.maxUses ? parseInt(req.body.maxUses) : null, startsAt: new Date(req.body.startsAt), endsAt: new Date(req.body.endsAt), isActive: req.body.isActive === 'on' });
    req.flash('success', 'Promoción creada');
    res.redirect('/admin/promotions');
  } catch (err) { console.error(err); req.flash('error', 'Error al crear promoción'); res.redirect('/admin/promotions/create'); }
};

const destroy = async (req, res) => {
  try { await promotionService.deletePromotion(req.params.id); req.flash('success', 'Promoción eliminada'); }
  catch (err) { req.flash('error', err.message); }
  res.redirect('/admin/promotions');
};

module.exports = { index, showCreate, create, destroy };
