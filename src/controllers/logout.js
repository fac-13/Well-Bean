exports.get = (req, res) => {
  req.session = null;
  res.redirect('/login');
};
