exports.getProducts = (req, res) => {
    const products = [
      { id: 1, name: 'Laptop', price: 1500 },
      { id: 2, name: 'Smartphone', price: 800 },
    ];
    res.render('shop', { products });
  };
  
  exports.getProduct = (req, res) => {
    const { id } = req.params;
    const product = { id, name: 'Laptop', price: 1500 }; // Simulación de producto
    res.render('single-product', { product });
  };