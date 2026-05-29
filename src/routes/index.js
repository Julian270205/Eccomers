const router = require('express').Router();
const productService = require('../services/product.service');

router.get('/', async (req, res) => {
  try {
    const featured = await productService.getFeaturedProducts(8);
    res.render('pages/index', { title: 'Jhoana Rosales Boutique - Moda Femenina', featured });
  } catch (err) { console.error(err); res.render('pages/index', { title: 'Jhoana Rosales Boutique', featured: [] }); }
});

module.exports = router;
