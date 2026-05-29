/**
 * product.js — Módulo de detalle de producto y filtros del catálogo
 */

// Auto-submit filter form on select/radio change
document.addEventListener('DOMContentLoaded', () => {
  const filterForm = document.getElementById('filter-form');
  if (filterForm) {
    filterForm.querySelectorAll('select, input[type="radio"]').forEach(el => {
      el.addEventListener('change', () => filterForm.submit());
    });
  }

  // Image gallery (if multiple images)
  const mainImg = document.getElementById('main-product-img');
  document.querySelectorAll('[data-thumb]').forEach(thumb => {
    thumb.addEventListener('click', () => {
      if (mainImg) mainImg.src = thumb.dataset.thumb;
    });
  });
});
