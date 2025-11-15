module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('pages/error', { error: err.message || 'Server Error' });
};
