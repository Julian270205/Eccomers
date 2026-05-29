const router = require('express').Router();
const ctrl = require('../controllers/checkout.controller');
const { requireAuth } = require('../middlewares/auth.middleware');
const { checkoutRules } = require('../validations/checkout.validation');
const { handleValidationErrors } = require('../middlewares/validation.middleware');

router.get('/', requireAuth, ctrl.showCheckout);
router.post('/validate-coupon', requireAuth, ctrl.validateCoupon);
router.post('/place-order', requireAuth, checkoutRules, handleValidationErrors('/checkout'), ctrl.placeOrder);

module.exports = router;
