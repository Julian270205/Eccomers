const { ROLES } = require('../utils/constants');

const requireAdmin = (req, res, next) => {
  if (!req.session.user || req.session.user.role !== ROLES.ADMIN) {
    req.flash('error', 'Acceso no autorizado');
    return res.redirect('/');
  }
  next();
};

module.exports = { requireAdmin };
