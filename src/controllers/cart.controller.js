const cartService = require('../services/cart.service');
const productService = require('../services/product.service');

const showCart = async (req, res) => {
  try {
    if (!req.session.user) {
      const sessionCart = req.session.cart || [];
      return res.render('pages/cart', { title: 'Mi Carrito', cart: { items: sessionCart, subtotal: sessionCart.reduce((a,i)=>a+(i.effectivePrice*i.quantity),0), itemCount: sessionCart.reduce((a,i)=>a+i.quantity,0) }, isGuest: true });
    }
    const cart = await cartService.getCart(req.session.user.id);
    res.render('pages/cart', { title: 'Mi Carrito', cart, isGuest: false });
  } catch (err) { console.error(err); res.redirect('/'); }
};

const addToCart = async (req, res) => {
  try {
    const { productId, variantId, quantity = 1 } = req.body;
    const product = await productService.getProductById(productId);
    if (!product) return res.status(404).json({ success: false, message: 'Producto no encontrado' });
    const unitPrice = product.priceInfo.finalPrice;
    if (req.session.user) {
      const cart = await cartService.addToCart(req.session.user.id, productId, variantId, quantity, unitPrice);
      return res.json({ success: true, message: 'Agregado al carrito', itemCount: cart.itemCount });
    }
    // Guest cart
    const sessionCart = req.session.cart || [];
    const variant = product.variants.find(v => v.id === parseInt(variantId));
    if (!variant || variant.stock < quantity) return res.json({ success: false, message: 'Sin stock disponible' });
    const existing = sessionCart.find(i => i.variantId === parseInt(variantId));
    if (existing) existing.quantity += parseInt(quantity);
    else sessionCart.push({ productId: parseInt(productId), variantId: parseInt(variantId), quantity: parseInt(quantity), effectivePrice: unitPrice, productName: product.name, size: variant.size, imageUrl: product.imageUrl });
    req.session.cart = sessionCart;
    const count = sessionCart.reduce((a,i)=>a+i.quantity,0);
    return res.json({ success: true, message: 'Agregado al carrito', itemCount: count });
  } catch (err) { res.status(400).json({ success: false, message: err.message }); }
};

const updateCart = async (req, res) => {
  try {
    const { itemId, quantity } = req.body;
    if (!req.session.user) return res.json({ success: true });
    const cart = await cartService.updateCartItem(req.session.user.id, itemId, quantity);
    res.json({ success: true, subtotal: cart.subtotal, itemCount: cart.itemCount });
  } catch (err) { res.status(400).json({ success: false, message: err.message }); }
};

const removeFromCart = async (req, res) => {
  try {
    const { itemId } = req.params;
    if (!req.session.user) { req.session.cart = (req.session.cart||[]).filter(i => i.variantId !== parseInt(itemId)); return res.json({ success: true }); }
    await cartService.removeFromCart(req.session.user.id, itemId);
    res.json({ success: true });
  } catch (err) { res.status(400).json({ success: false, message: err.message }); }
};

module.exports = { showCart, addToCart, updateCart, removeFromCart };
