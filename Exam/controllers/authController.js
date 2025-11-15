const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const createToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
};

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = new User({ username, password, role });
    await user.save();
    res.redirect('/login');
  } catch (err) {
    res.render('pages/register', { error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.render('pages/login', { error: 'Invalid credentials' });
    const match = await user.comparePassword(password);
    if (!match) return res.render('pages/login', { error: 'Invalid credentials' });
    const token = createToken(user);
    res.cookie(process.env.COOKIE_NAME || 'token', token, { httpOnly: true, maxAge: 1000*60*60*24*7 });
    res.redirect('/dashboard');
  } catch (err) {
    res.render('pages/login', { error: err.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie(process.env.COOKIE_NAME || 'token');
  res.redirect('/login');
};
