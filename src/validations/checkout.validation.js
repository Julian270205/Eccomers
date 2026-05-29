const { body } = require('express-validator');

const checkoutRules = [
  body('name').trim().notEmpty().withMessage('El nombre es requerido'),
  body('email').trim().isEmail().withMessage('Email de envío inválido'),
  body('phone').trim().notEmpty().withMessage('El teléfono es requerido'),
  body('address').trim().notEmpty().withMessage('La dirección es requerida'),
  body('city').trim().notEmpty().withMessage('La ciudad es requerida'),
];

module.exports = { checkoutRules };
