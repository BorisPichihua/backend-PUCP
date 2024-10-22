const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// Ruta para mostrar la vista de login
router.get('/login', (req, res) => {
  res.render('login', { title: 'Iniciar Sesión' });
});

// Ruta para manejar la autenticación del login
router.post('/login', accountController.login);

// Ruta para mostrar la vista de registro
router.get('/register', (req, res) => {
  res.render('register', { title: 'Registro' });
});

// Ruta para manejar el registro del usuario
router.post('/register', accountController.register);

// Ruta para mostrar el dashboard del usuario
router.get('/my-account', accountController.getMyAccount);

// Ruta para mostrar el seguimiento de pedidos
router.get('/order-tracking', accountController.getOrderTracking);

// Ruta para mostrar la vista de checkout
router.get('/checkout', accountController.getCheckout);

// Ruta para mostrar el dashboard de admin
router.get('/admin-dashboard', (req, res) => {
  console.log('Renderizando página de Dashboard Admin');
  res.render('admin-dashboard-enhanced', { title: 'Dashboard Admin' });
});

module.exports = router;
