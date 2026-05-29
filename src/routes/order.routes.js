const router = require('express').Router();
const ctrl = require('../controllers/order.controller');
const { requireAuth } = require('../middlewares/auth.middleware');

router.get('/', requireAuth, ctrl.myOrders);

module.exports = router;
