/**
 * filters.js — Búsqueda en tiempo real y filtros avanzados
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('input[name="q"]');
  if (!searchInput) return;

  let debounceTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const form = e.target.closest('form');
      if (form) form.submit();
    }, 600);
  });
});
