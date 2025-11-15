const Product = require('../models/productModel');
const Category = require('../models/categoryModel');



exports.listAll = async (req, res) => {
  const products = await Product.find().populate('category user');
  res.render('pages/productList', { products });
};

exports.showMy = async (req, res) => {
  const products = await Product.find({ user: req.user._id }).populate('category');
  res.render('pages/myProducts', { products });
};

exports.createForm = async (req, res) => {
  const categories = await Category.find();
  res.render('pages/productForm', { product: null, categories });
};

exports.create = async (req, res) => {
  const { title, description, price, category } = req.body;
  const prod = new Product({ title, description, price, category, user: req.user._id });
  await prod.save();
  // attach to user
  req.user.products.push(prod._id);
  await req.user.save();
  res.redirect('/products');
};

exports.editForm = async (req, res) => {
  const prod = await Product.findById(req.params.id);
  const categories = await Category.find();
  res.render('pages/productForm', { product: prod, categories });
};

exports.update = async (req, res) => {
  const { title, description, price, category } = req.body;
  await Product.findByIdAndUpdate(req.params.id, { title, description, price, category });
  res.redirect('/products');
};

exports.delete = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  // remove from user products if exists
  await req.user.updateOne({ $pull: { products: req.params.id } });
  res.redirect('/products/my');
};
