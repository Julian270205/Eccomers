const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 10,
  message: 'Demasiados intentos de inicio de sesión. Por favor espera 15 minutos.',
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    req.flash('error', 'Demasiados intentos. Por favor espera 15 minutos e intenta de nuevo.');
    res.redirect('/auth/login');
  },
});

const generalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { loginLimiter, generalLimiter };
