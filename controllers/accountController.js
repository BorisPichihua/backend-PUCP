exports.getMyAccount = (req, res) => {
    console.log('Renderizando página de Mi Cuenta');
    res.render('my-account', { title: 'Mi Cuenta' });
  };
  
  exports.getOrderTracking = (req, res) => {
    console.log('Renderizando página de Seguimiento de Pedido');
    res.render('order-tracking', { title: 'Seguimiento de Pedido' });
  };
  
  exports.getCheckout = (req, res) => {
    console.log('Renderizando página de Checkout');
    res.render('checkout', { title: 'Checkout' });
  };
  
  exports.login = (req, res) => {
    const { username, password } = req.body;
    // Simulación de autenticación
    if (username === 'admin' && password === '1234') {
      res.redirect('/my-account');
    } else {
      res.status(401).send('Credenciales inválidas');
    }
  };
  
  exports.register = (req, res) => {
    const { username, email, password } = req.body;
    // Lógica para registrar al usuario
    res.send(`Usuario ${username} registrado con éxito`);
  };
  