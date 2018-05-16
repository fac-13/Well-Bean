const { postNewUser } = require('../model/queries/');
const bcrypt = require('bcrypt');


exports.get = (req, res) => res.render('signup');

exports.post = (req, res, next) => {
  const saltRounds = 10;
  const { username, password, email } = req.body;
  if (username && password && email) {
    bcrypt.hash(password, saltRounds)
      .then(hash =>
        postNewUser(username, hash, email)
          .then(() => res.redirect('/'))
          .catch((e) => {
            if (e.detail.includes('already exists')) {
              console.log(e.detail);
              res.render('signup', { error: 'username already exists' });
            } else {
              next(e);
            }
          }))
      .catch(err => next(err));
  } else if (!username) {
    res.render('signup', { error: 'username' });
  } else if (!email) {
    res.render('signup', { error: 'email' });
  } else if (!password) {
    res.render('signup', { error: 'password' });
  }
};
