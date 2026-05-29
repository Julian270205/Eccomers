const router = require('express').Router();
const ctrl = require('../controllers/cart.controller');

router.get('/', ctrl.showCart);
router.post('/add', ctrl.addToCart);
router.put('/update', ctrl.updateCart);
router.delete('/remove/:itemId', ctrl.removeFromCart);

module.exports = router;
