const { postNewUser } = require('../model/queries/');

exports.get = (req, res) => res.render('signup');

exports.post = (req, res, next) => {
  const { username, password, email } = req.body;

  postNewUser(username, password, email)
    .then(() => res.redirect('/'))
    .catch(e => next(e));
};
