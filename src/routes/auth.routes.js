const router = require('express').Router();
const ctrl = require('../controllers/auth.controller');
const { requireGuest } = require('../middlewares/auth.middleware');
const { loginLimiter } = require('../middlewares/rateLimit.middleware');
const { registerRules, loginRules } = require('../validations/auth.validation');
const { handleValidationErrors } = require('../middlewares/validation.middleware');

router.get('/login', requireGuest, ctrl.showLogin);
router.post('/login', requireGuest, loginLimiter, loginRules, handleValidationErrors('/auth/login'), ctrl.login);
router.get('/register', requireGuest, ctrl.showRegister);
router.post('/register', requireGuest, registerRules, handleValidationErrors('/auth/register'), ctrl.register);
router.post('/logout', ctrl.logout);

module.exports = router;
