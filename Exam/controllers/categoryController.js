const Category = require('../models/categoryModel');

exports.list = async (req, res) => {
  const categories = await Category.find();
  res.render('pages/categoryList', { categories });
};

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const c = new Category({ name });
    await c.save();
    res.redirect('/categories');
  } catch (err) {
    res.render('pages/categoryList', { categories: await Category.find(), error: err.message });
  }
};

exports.delete = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.redirect('/categories');
};
