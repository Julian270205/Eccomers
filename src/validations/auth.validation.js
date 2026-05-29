const { body } = require('express-validator');

const registerRules = [
  body('name').trim().notEmpty().withMessage('El nombre es requerido').isLength({ max: 100 }),
  body('email').trim().isEmail().withMessage('Email inválido').normalizeEmail(),
  body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/^(?=.*[A-Z])(?=.*\d)/).withMessage('La contraseña debe contener al menos una mayúscula y un número'),
  body('phone').optional().isMobilePhone().withMessage('Teléfono inválido'),
];

const loginRules = [
  body('email').trim().isEmail().withMessage('Email inválido').normalizeEmail(),
  body('password').notEmpty().withMessage('La contraseña es requerida'),
];

module.exports = { registerRules, loginRules };
