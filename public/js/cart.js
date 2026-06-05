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

  // ── Sidebar ──────────────────────────────────────────────────
  const loadSidebar = async () => {
    const container = document.getElementById('sidebar-cart-items');
    const subtotalEl = document.getElementById('sidebar-subtotal');
    if (!container) return;
    try {
      const res = await fetch('/carrito/json', { headers: { 'Accept': 'application/json' } });
      const data = await res.json();
      if (!data.success) { container.innerHTML = '<p class="text-gray-500 text-sm text-center py-8">Error al cargar el carrito.</p>'; return; }

      if (!data.items || data.items.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-sm text-center py-8">Tu carrito está vacío.</p>';
        if (subtotalEl) subtotalEl.textContent = formatCOP(0);
        return;
      }

      container.innerHTML = data.items.map(item => {
        const name = item.product?.name || item.productName || '';
        const size = item.variant?.size || item.size || '';
        const price = item.effectivePrice || item.unitPrice || 0;
        const img = item.product?.imageUrl || item.imageUrl || 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=100&q=80';
        return `
          <div class="flex gap-3 mb-4 pb-4 border-b border-gray-100 last:border-0">
            <img src="${img}" alt="${name}" class="w-16 h-20 object-cover flex-shrink-0">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">${name}</p>
              <p class="text-xs text-gray-500 mt-0.5">Talla: ${size}</p>
              <p class="text-sm font-semibold mt-1">${formatCOP(price)}</p>
              <p class="text-xs text-gray-500">Cantidad: ${item.quantity}</p>
            </div>
          </div>`;
      }).join('');

      if (subtotalEl) subtotalEl.textContent = formatCOP(data.subtotal || 0);
      updateBadge(data.itemCount || 0);
    } catch (e) {
      container.innerHTML = '<p class="text-gray-500 text-sm text-center py-8">Error al cargar el carrito.</p>';
    }
  };

  // ── Add to cart ───────────────────────────────────────────────
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
        // Refresh sidebar if open
        loadSidebar();
      } else {
        showNotification('❌ ' + (data.message || 'Error al agregar'), 'error');
      }
      return data;
    } catch (e) {
      showNotification('❌ Error de conexión', 'error');
      return { success: false };
    }
  };

  // ── Remove from cart ──────────────────────────────────────────
  const removeFromCart = async (itemId) => {
    try {
      const res = await fetch(`/carrito/remove/${itemId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        const el = document.getElementById(`cart-item-${itemId}`);
        if (el) el.remove();
        showNotification('Producto eliminado', 'info');
        // Refresh badge & subtotal
        refreshCartTotals();
        loadSidebar();
      }
    } catch (e) {}
  };

  // ── Update quantity ───────────────────────────────────────────
  const updateQuantity = async (itemId, quantity) => {
    if (quantity < 1) return removeFromCart(itemId);
    try {
      const res = await fetch('/carrito/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId, quantity }),
      });
      const data = await res.json();
      if (data.success) {
        updateBadge(data.itemCount);
        // Update qty display and line total on cart page
        const qtyEl = document.getElementById(`qty-${itemId}`);
        if (qtyEl) qtyEl.textContent = quantity;
        // Update line total
        const row = document.getElementById(`cart-item-${itemId}`);
        if (row) {
          const unitPriceEl = row.querySelector('[data-unit-price]');
          const lineTotalEl = document.getElementById(`line-total-${itemId}`);
          if (unitPriceEl && lineTotalEl) {
            const unitPrice = parseFloat(unitPriceEl.dataset.unitPrice);
            lineTotalEl.textContent = formatCOP(unitPrice * quantity);
          }
          // Sync data-current on qty buttons
          row.querySelectorAll('[data-item-id]').forEach(btn => btn.dataset.current = quantity);
        }
        refreshCartTotals();
        loadSidebar();
      } else {
        showNotification('❌ ' + data.message, 'error');
      }
    } catch (e) {}
  };

  // ── Recalculate subtotal shown on cart page ───────────────────
  const refreshCartTotals = async () => {
    try {
      const res = await fetch('/carrito/json', { headers: { 'Accept': 'application/json' } });
      const data = await res.json();
      if (!data.success) return;
      updateBadge(data.itemCount || 0);
      // Update subtotal text nodes on cart page
      document.querySelectorAll('[data-cart-subtotal]').forEach(el => {
        el.textContent = formatCOP(data.subtotal || 0);
      });
    } catch (e) {}
  };

  // ── Notification ──────────────────────────────────────────────
  const showNotification = (message, type = 'info') => {
    const existing = document.getElementById('cart-notification');
    if (existing) existing.remove();
    const el = document.createElement('div');
    el.id = 'cart-notification';
    el.className = `fixed top-20 right-4 z-50 px-5 py-3 text-sm font-medium shadow-lg max-w-xs transition-all ${
      type === 'success' ? 'bg-green-600 text-white' :
      type === 'error'   ? 'bg-red-600 text-white' :
                           'bg-gray-900 text-white'
    }`;
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  };

  // ── Event delegation ──────────────────────────────────────────
  document.addEventListener('click', (e) => {
    // Global add-to-cart buttons (catalog cards)
    const addBtn = e.target.closest('[data-add-to-cart]');
    if (addBtn) {
      e.preventDefault();
      const productId = addBtn.dataset.productId;
      const variantId = addBtn.dataset.variantId;
      const quantity = parseInt(addBtn.dataset.quantity || 1);
      if (!variantId) { showNotification('Selecciona una talla', 'error'); return; }
      addToCart(productId, variantId, quantity);
      return;
    }

    // Cart page: remove button
    const removeBtn = e.target.closest('[data-cart-remove]');
    if (removeBtn) {
      e.preventDefault();
      removeFromCart(removeBtn.dataset.itemId);
      return;
    }

    // Cart page: decrease quantity
    const downBtn = e.target.closest('[data-cart-qty-down]');
    if (downBtn) {
      e.preventDefault();
      const itemId = downBtn.dataset.itemId;
      const current = parseInt(downBtn.dataset.current || 1);
      updateQuantity(itemId, current - 1);
      return;
    }

    // Cart page: increase quantity
    const upBtn = e.target.closest('[data-cart-qty-up]');
    if (upBtn) {
      e.preventDefault();
      const itemId = upBtn.dataset.itemId;
      const current = parseInt(upBtn.dataset.current || 1);
      updateQuantity(itemId, current + 1);
      return;
    }
  });

  // Load sidebar when it opens (Alpine.js cartOpen watcher)
  document.addEventListener('alpine:init', () => {
    // Hook into Alpine data to watch cartOpen
    document.addEventListener('cart:open', loadSidebar);
  });

  // Observe sidebar visibility via MutationObserver as fallback
  const observeSidebar = () => {
    const sidebar = document.querySelector('[x-show="cartOpen"]');
    if (!sidebar) return;
    const observer = new MutationObserver(() => {
      if (sidebar.style.display !== 'none') loadSidebar();
    });
    observer.observe(sidebar, { attributes: true, attributeFilter: ['style'] });
  };

  document.addEventListener('DOMContentLoaded', observeSidebar);

  return { addToCart, removeFromCart, updateQuantity, updateBadge, showNotification, loadSidebar, formatCOP };
})();

window.Cart = Cart;
