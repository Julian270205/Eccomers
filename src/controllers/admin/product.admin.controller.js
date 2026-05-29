const productService = require('../../services/product.service');
const { CATEGORIES, SIZES } = require('../../utils/constants');

const index = async (req, res) => {
  const products = await productService.getProductsAdmin();
  res.render('admin/products/index', { title: 'Productos', products, CATEGORIES });
};

const showCreate = (req, res) => res.render('admin/products/create', { title: 'Nuevo Producto', CATEGORIES, SIZES });

const create = async (req, res) => {
  try {
    const sizes = SIZES.map(s => ({ size: s, stock: parseInt(req.body[`stock_${s}`] || 0) })).filter(s => s.stock >= 0);
    const imageUrl = req.file ? `/images/products/${req.file.filename}` : (req.body.imageUrl || null);
    await productService.createProduct({ ...req.body, imageUrl }, sizes);
    req.flash('success', 'Producto creado exitosamente');
    res.redirect('/admin/products');
  } catch (err) { console.error(err); req.flash('error', 'Error al crear producto'); res.redirect('/admin/products/create'); }
};

const showEdit = async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  if (!product) return res.redirect('/admin/products');
  res.render('admin/products/edit', { title: 'Editar Producto', product, CATEGORIES, SIZES });
};

const update = async (req, res) => {
  try {
    const imageUrl = req.file ? `/images/products/${req.file.filename}` : req.body.imageUrl;
    await productService.updateProduct(req.params.id, { ...req.body, imageUrl });
    req.flash('success', 'Producto actualizado');
    res.redirect('/admin/products');
  } catch (err) { console.error(err); req.flash('error', 'Error al actualizar'); res.redirect(`/admin/products/${req.params.id}/edit`); }
};

const destroy = async (req, res) => {
  await productService.deleteProduct(req.params.id);
  req.flash('success', 'Producto desactivado');
  res.redirect('/admin/products');
};

module.exports = { index, showCreate, create, showEdit, update, destroy };
