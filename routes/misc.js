const express = require('express');
const router = express.Router();

// Ruta para la página del blog
router.get('/blog', (req, res) => {
  console.log('Renderizando página de Blog');
  res.render('blog', { title: 'Blog' });
});

// Ruta para la página de un post individual
router.get('/single-post', (req, res) => {
  console.log('Renderizando página de Post Individual');
  res.render('single-post', { title: 'Post Individual' });
});

// Ruta para la página "Próximamente"
router.get('/coming-soon', (req, res) => {
  console.log('Renderizando página de Próximamente');
  res.render('coming-soon', { title: 'Próximamente' });
});

// Ruta para la página de error
router.get('/error', (req, res) => {
  console.log('Renderizando página de Error');
  res.render('error-page', { title: 'Error' });
});

module.exports = router;
