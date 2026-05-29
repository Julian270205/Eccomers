const productService = require('../services/product.service');
const { CATEGORIES, SIZES } = require('../utils/constants');

const catalog = async (req, res) => {
  try {
    const filters = { category: req.query.category, search: req.query.q, minPrice: req.query.minPrice, maxPrice: req.query.maxPrice, sort: req.query.sort, size: req.query.size };
    let products = await productService.getProducts(filters);
    if (filters.size) products = products.filter(p => p.variants.some(v => v.size === filters.size && v.stock > 0));
    const page = parseInt(req.query.page) || 1;
    const perPage = 12;
    const total = products.length;
    const totalPages = Math.ceil(total / perPage);
    const paginated = products.slice((page - 1) * perPage, page * perPage);
    res.render('pages/catalog', { title: 'Catálogo', products: paginated, filters, CATEGORIES, SIZES, total, totalPages, currentPage: page });
  } catch (err) { console.error(err); res.render('pages/catalog', { title: 'Catálogo', products: [], filters: {}, CATEGORIES, SIZES, total: 0, totalPages: 1, currentPage: 1 }); }
};

const detail = async (req, res) => {
  try {
    const product = await productService.getProductBySlug(req.params.slug);
    if (!product) return res.status(404).render('pages/404', { title: 'Producto no encontrado' });
    const related = await productService.getProducts({ category: product.category });
    res.render('pages/product-detail', { title: product.name, product, related: related.filter(p => p.slug !== product.slug).slice(0, 4), SIZES });
  } catch (err) { console.error(err); res.redirect('/productos'); }
};

module.exports = { catalog, detail };
