const { validationResult } = require('express-validator');

const handleValidationErrors = (redirectUrl) => (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages = errors.array().map(e => e.msg);
    req.flash('error', messages.join(', '));
    return res.redirect(redirectUrl || 'back');
  }
  next();
};

module.exports = { handleValidationErrors };
