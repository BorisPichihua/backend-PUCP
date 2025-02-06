const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const accountRoutes = require('./routes/account');
const shopRoutes = require('./routes/shop');
const homeRoutes = require('./routes/home');
const miscRoutes = require('./routes/misc');

// Configuración de variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev')); // Registro de solicitudes HTTP
app.use(express.static('public')); // Servir archivos estáticos
app.use(express.urlencoded({ extended: false })); // Manejo de formularios
app.use(express.json()); // Manejo de datos JSON

// Configuración del motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Configuración de rutas
app.use('/account', accountRoutes); // Rutas de cuenta
app.use('/shop', shopRoutes); // Rutas de tienda
app.use('/', homeRoutes); // Páginas principales
app.use('/', miscRoutes); // Páginas adicionales

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).render('error-page', { title: 'Página No Encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


