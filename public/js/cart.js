/**
 * cart.js — Módulo de carrito para el storefront
 * Responsabilidades: agregar, actualizar, eliminar, sincronizar badge y sidebar
 */

const Cart = (() => {
  const formatCOP = (amount) =>
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(amount);

  const updateBadge = (count) => {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;
    badge.textContent = count;
    if (count > 0) badge.classList.remove('hidden');
    else badge.classList.add('hidden');
  };

  const loadSidebar = async () => {
    try {
      const res = await fetch('/carrito', { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
      // In full implementation, a JSON endpoint would return cart data
      // For now, sidebar shows the count updated
    } catch (e) {}
  };

  const addToCart = async (productId, variantId, quantity = 1) => {
    try {
      const res = await fetch('/carrito/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, variantId, quantity }),
      });
      const data = await res.json();
      if (data.success) {
        updateBadge(data.itemCount);
        showNotification('✅ ' + (data.message || 'Agregado al carrito'), 'success');
      } else {
        showNotification('❌ ' + (data.message || 'Error al agregar'), 'error');
      }
      return data;
    } catch (e) {
      showNotification('❌ Error de conexión', 'error');
      return { success: false };
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const res = await fetch(`/carrito/remove/${itemId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        const el = document.getElementById(`cart-item-${itemId}`);
        if (el) el.remove();
        showNotification('Producto eliminado', 'info');
      }
    } catch (e) {}
  };

  const updateQuantity = async (itemId, quantity) => {
    try {
      const res = await fetch('/carrito/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId, quantity }),
      });
      const data = await res.json();
      if (data.success) {
        updateBadge(data.itemCount);
      } else {
        showNotification('❌ ' + data.message, 'error');
      }
    } catch (e) {}
  };

  const showNotification = (message, type = 'info') => {
    const existing = document.getElementById('cart-notification');
    if (existing) existing.remove();

    const el = document.createElement('div');
    el.id = 'cart-notification';
    el.className = `fixed top-20 right-4 z-50 px-5 py-3 text-sm font-medium shadow-lg max-w-xs transition-all ${
      type === 'success' ? 'bg-green-600 text-white' :
      type === 'error' ? 'bg-red-600 text-white' :
      'bg-gray-900 text-white'
    }`;
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  };

  // Delegate click events for add-to-cart buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-add-to-cart]');
    if (!btn) return;
    e.preventDefault();
    const productId = btn.dataset.productId;
    const variantId = btn.dataset.variantId;
    const quantity = parseInt(btn.dataset.quantity || 1);
    if (!variantId) { showNotification('Selecciona una talla', 'error'); return; }
    addToCart(productId, variantId, quantity);
  });

  return { addToCart, removeFromCart, updateQuantity, updateBadge, showNotification, formatCOP };
})();

window.Cart = Cart;
