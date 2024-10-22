const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');

// Rutas utilizando controladores para mantener la lógica
router.get('/shop', shopController.getProducts);
router.get('/single-product/:id', shopController.getProduct);

// Rutas adicionales para la lista de deseos y carrito
router.get('/wishlist', (req, res) => {
  console.log('Renderizando página de Lista de Deseos');
  res.render('wishlist', { title: 'Lista de Deseos' });
});

router.get('/cart', (req, res) => {
  console.log('Renderizando página de Carrito');
  res.render('cart', { title: 'Carrito' });
});

module.exports = router;
