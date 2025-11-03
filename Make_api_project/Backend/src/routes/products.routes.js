import express from 'express';

const router = express.Router();

// Fake products data
const products = [
  { id: 1, name: 'Laptop Pro', category: 'Electronics', price: 1299.99, stock: 15, rating: 4.8 },
  { id: 2, name: 'Wireless Mouse', category: 'Electronics', price: 29.99, stock: 50, rating: 4.5 },
  { id: 3, name: 'Mechanical Keyboard', category: 'Electronics', price: 149.99, stock: 30, rating: 4.7 },
  { id: 4, name: 'Monitor 27"', category: 'Electronics', price: 399.99, stock: 20, rating: 4.9 },
  { id: 5, name: 'USB-C Cable', category: 'Accessories', price: 19.99, stock: 100, rating: 4.2 },
  { id: 6, name: 'Webcam HD', category: 'Electronics', price: 79.99, stock: 25, rating: 4.6 },
];

// Get all products
router.get('/products', (req, res) => {
  res.json({
    success: true,
    count: products.length,
    data: products
  });
});

// Get single product by ID
router.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.json({ success: true, data: product });
});

export default router;

