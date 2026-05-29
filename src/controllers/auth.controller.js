const bcrypt = require('bcryptjs');
const userRepo = require('../repositories/user.repository');
const { ROLES } = require('../utils/constants');

const showLogin = (req, res) => res.render('pages/auth/login', { title: 'Iniciar Sesión' });

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userRepo.findByEmail(email.trim().toLowerCase());
    if (!user || !user.isActive) { req.flash('error', 'Credenciales incorrectas'); return res.redirect('/auth/login'); }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) { req.flash('error', 'Credenciales incorrectas'); return res.redirect('/auth/login'); }
    req.session.user = { id: user.id, name: user.name, email: user.email, role: user.role, loyaltyPoints: user.loyaltyPoints };
    req.flash('success', `¡Bienvenida, ${user.name.split(' ')[0]}!`);
    return res.redirect(user.role === ROLES.ADMIN ? '/admin' : '/');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Error al iniciar sesión');
    res.redirect('/auth/login');
  }
};

const showRegister = (req, res) => res.render('pages/auth/register', { title: 'Crear Cuenta' });

const register = async (req, res) => {
  try {
    const { name, email, password, phone, city } = req.body;
    const existing = await userRepo.findByEmail(email.trim().toLowerCase());
    if (existing) { req.flash('error', 'Este correo ya está registrado'); return res.redirect('/auth/register'); }
    const hashed = await bcrypt.hash(password, parseInt(process.env.BCRYPT_ROUNDS) || 12);
    const user = await userRepo.create({ name: name.trim(), email: email.trim().toLowerCase(), password: hashed, phone: phone || null, city: city || null });
    req.session.user = { id: user.id, name: user.name, email: user.email, role: user.role, loyaltyPoints: 0 };
    req.flash('success', `¡Cuenta creada! Bienvenida, ${user.name.split(' ')[0]}`);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Error al crear la cuenta');
    res.redirect('/auth/register');
  }
};

const logout = (req, res) => {
  req.session.destroy(() => res.redirect('/'));
};

module.exports = { showLogin, login, showRegister, register, logout };
