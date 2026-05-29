const requireAuth = (req, res, next) => {
  if (!req.session.user) {
    req.flash('error', 'Debes iniciar sesión para continuar');
    return res.redirect('/auth/login');
  }
  next();
};

const requireGuest = (req, res, next) => {
  if (req.session.user) return res.redirect('/');
  next();
};

module.exports = { requireAuth, requireGuest };
