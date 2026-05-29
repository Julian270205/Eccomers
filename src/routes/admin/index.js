const router = require('express').Router();
const { requireAuth } = require('../../middlewares/auth.middleware');
const { requireAdmin } = require('../../middlewares/role.middleware');
const { upload } = require('../../middlewares/upload.middleware');

const dashboardCtrl = require('../../controllers/admin/dashboard.admin.controller');
const productCtrl = require('../../controllers/admin/product.admin.controller');
const orderCtrl = require('../../controllers/admin/order.admin.controller');
const inventoryCtrl = require('../../controllers/admin/inventory.admin.controller');
const promotionCtrl = require('../../controllers/admin/promotion.admin.controller');

router.use(requireAuth, requireAdmin);

// Dashboard
router.get('/', dashboardCtrl.dashboard);

// Products
router.get('/products', productCtrl.index);
router.get('/products/create', productCtrl.showCreate);
router.post('/products', upload.single('image'), productCtrl.create);
router.get('/products/:id/edit', productCtrl.showEdit);
router.put('/products/:id', upload.single('image'), productCtrl.update);
router.delete('/products/:id', productCtrl.destroy);

// Orders
router.get('/orders', orderCtrl.index);
router.get('/orders/:id', orderCtrl.detail);
router.post('/orders/:id/status', orderCtrl.updateStatus);
router.get('/orders/:id/confirm', orderCtrl.confirmByToken);

// Inventory
router.get('/inventory', inventoryCtrl.index);
router.post('/inventory/update-stock', inventoryCtrl.updateStock);

// Promotions
router.get('/promotions', promotionCtrl.index);
router.get('/promotions/create', promotionCtrl.showCreate);
router.post('/promotions', promotionCtrl.create);
router.delete('/promotions/:id', promotionCtrl.destroy);

module.exports = router;
