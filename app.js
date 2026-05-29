require('dotenv').config();
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const helmet = require('helmet');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const csrf = require('csurf');
const { sessionConfig } = require('./src/config/session');
const { httpLogger } = require('./src/utils/logger');
const { ROLES } = require('./src/utils/constants');
const { formatCurrency, formatDate } = require('./src/utils/helpers');

// Routes
const indexRoutes = require('./src/routes/index');
const authRoutes = require('./src/routes/auth.routes');
const productRoutes = require('./src/routes/product.routes');
const cartRoutes = require('./src/routes/cart.routes');
const checkoutRoutes = require('./src/routes/checkout.routes');
const orderRoutes = require('./src/routes/order.routes');
const adminRoutes = require('./src/routes/admin/index');

const app = express();

// ── Security ──────────────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net', 'cdn.tailwindcss.com', 'cdnjs.cloudflare.com', 'unpkg.com'],
      styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com', 'cdn.tailwindcss.com', 'cdnjs.cloudflare.com'],
      fontSrc: ["'self'", 'fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'blob:'],
      connectSrc: ["'self'"],
    },
  },
}));

// ── View Engine ───────────────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');
app.set('layout extractScripts', true);

// ── Static Files ──────────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ── Body Parsing ──────────────────────────────────────────────
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
app.use(methodOverride('_method'));

// ── Logging ───────────────────────────────────────────────────
app.use(httpLogger);

// ── Session ───────────────────────────────────────────────────
app.use(session(sessionConfig));

// ── Flash Messages ────────────────────────────────────────────
app.use(flash());

// ── CSRF Protection ───────────────────────────────────────────
const csrfProtection = csrf({ cookie: false });

// ── Global Template Locals ────────────────────────────────────
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  res.locals.isAdmin = req.session.user?.role === ROLES.ADMIN;
  res.locals.isAuthenticated = !!req.session.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.info = req.flash('info');
  res.locals.cartCount = req.session.cart?.reduce((acc, i) => acc + i.quantity, 0) || 0;
  res.locals.formatCurrency = formatCurrency;
  res.locals.formatDate = formatDate;
  next();
});

// ── Routes ────────────────────────────────────────────────────
app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/productos', productRoutes);
app.use('/carrito', cartRoutes);
app.use('/checkout', checkoutRoutes);
app.use('/mis-pedidos', orderRoutes);
app.use('/admin', adminRoutes);

// ── 404 Handler ───────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).render('pages/404', { title: 'Página no encontrada' });
});

// ── Error Handler ─────────────────────────────────────────────
app.use((err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') {
    req.flash('error', 'Sesión inválida. Por favor intenta de nuevo.');
    return res.redirect('back');
  }
  console.error('[ERROR]', err.stack);
  res.status(err.status || 500).render('pages/error', {
    title: 'Error del servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Ha ocurrido un error interno.',
  });
});

module.exports = app;
