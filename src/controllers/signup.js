const { postNewUser } = require('../model/queries/');

exports.get = (req, res) => res.render('signup');

exports.post = (req, res, next) => {
  const { username, password, email } = req.body;
  if (username && password && email) {
    postNewUser(username, password, email)
      .then(() => res.redirect('/'))
      .catch(e => next(e));
  } else if (!username) {
    res.render('signup', { error: 'username' });
  } else if (!email) {
    res.render('signup', { error: 'email' });
  } else if (!password) {
    res.render('signup', { error: 'password' });
  }
};
