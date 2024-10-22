const express = require('express');
const router = express.Router();

// Ruta para la página de inicio
router.get('', (req, res) => {
  res.render('index', { title: 'Inicio' });
});

// Ruta para la página "Sobre Nosotros"
router.get('/about', (req, res) => {
  res.render('about', { title: 'Sobre Nosotros' });
});

// Ruta para la página de contacto
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contacto' });
});

// Ruta para la página de preguntas frecuentes
router.get('/faqs', (req, res) => {
  res.render('faqs', { title: 'Preguntas Frecuentes' });
});

module.exports = router;
