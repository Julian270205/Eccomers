/**
 * checkout.js — Validaciones del checkout
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form[action*="place-order"]');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const city = document.getElementById('city-input')?.value?.trim().toLowerCase();
    // city validation is handled by Alpine.js and server-side
  });
});
