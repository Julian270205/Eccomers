const router = require('express').Router();
const ctrl = require('../controllers/product.controller');

router.get('/', ctrl.catalog);
router.get('/:slug', ctrl.detail);

module.exports = router;
