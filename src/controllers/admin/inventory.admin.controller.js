const productService = require('../../services/product.service');
const stockService = require('../../services/stock.service');
const { SIZES } = require('../../utils/constants');

const index = async (req, res) => {
  const products = await productService.getProductsAdmin();
  const lowStock = await productService.getLowStockProducts(3);
  res.render('admin/inventory/index', { title: 'Inventario', products, lowStock, SIZES });
};

const updateStock = async (req, res) => {
  try {
    const { variantId, stock } = req.body;
    await stockService.updateVariantStock(variantId, stock);
    res.json({ success: true });
  } catch (err) { res.status(400).json({ success: false, message: err.message }); }
};

module.exports = { index, updateStock };
