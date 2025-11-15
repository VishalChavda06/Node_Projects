const Category = require('../models/categoryModel');
const Product = require('../models/productModel');

exports.home = async (req, res) => {
  const categories = await Category.find();
  const products = await Product.find().limit(8).populate('category');
  res.render('pages/home', { categories, products, user: req.user || null });
};

exports.dashboard = async (req, res) => {
  const categories = await Category.find();
  res.render('pages/dashboard', { user: req.user, categories });
};

exports.loginPage = (req, res) => {
  res.render('pages/login', { error: null });
};

exports.registerPage = (req, res) => {
  res.render('pages/register', { error: null });
};
