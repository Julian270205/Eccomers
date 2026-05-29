/**
 * admin/dashboard.js — Gráficas Chart.js para el panel administrativo
 * Responsabilidades: ventas diarias, mensuales, configuración visual de Chart.js
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.__dashboardData;
  if (!data) return;

  const PINK = '#E8B4B8';
  const BLACK = '#000000';
  const GRAY = '#e5e7eb';

  Chart.defaults.font.family = "'Inter', system-ui, sans-serif";
  Chart.defaults.color = '#6b7280';

  // ── Daily Chart (últimos 30 días) ──────────────────────────────
  const dailyCtx = document.getElementById('dailyChart');
  if (dailyCtx) {
    new Chart(dailyCtx, {
      type: 'bar',
      data: {
        labels: data.dailyData.map(d => d.date),
        datasets: [
          {
            label: 'Ventas (COP)',
            data: data.dailyData.map(d => d.revenue),
            backgroundColor: PINK,
            borderColor: '#D4949A',
            borderWidth: 1,
            borderRadius: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const val = ctx.raw;
                return ' ' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(val);
              },
            },
          },
        },
        scales: {
          x: { grid: { display: false }, ticks: { maxTicksLimit: 10, maxRotation: 0 } },
          y: {
            grid: { color: GRAY },
            ticks: {
              callback: (val) => {
                if (val >= 1000000) return '$' + (val / 1000000).toFixed(1) + 'M';
                if (val >= 1000) return '$' + (val / 1000).toFixed(0) + 'K';
                return '$' + val;
              },
            },
          },
        },
      },
    });
  }

  // ── Monthly Chart (últimos 12 meses) ──────────────────────────
  const monthlyCtx = document.getElementById('monthlyChart');
  if (monthlyCtx) {
    new Chart(monthlyCtx, {
      type: 'line',
      data: {
        labels: data.monthlyData.map(d => d.label),
        datasets: [
          {
            label: 'Ventas mensuales (COP)',
            data: data.monthlyData.map(d => d.revenue),
            borderColor: BLACK,
            backgroundColor: 'rgba(232, 180, 184, 0.15)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: PINK,
            pointBorderColor: BLACK,
            pointRadius: 4,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                return ' ' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(ctx.raw);
              },
            },
          },
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            grid: { color: GRAY },
            ticks: {
              callback: (val) => {
                if (val >= 1000000) return '$' + (val / 1000000).toFixed(1) + 'M';
                if (val >= 1000) return '$' + (val / 1000).toFixed(0) + 'K';
                return '$' + val;
              },
            },
          },
        },
      },
    });
  }
});
