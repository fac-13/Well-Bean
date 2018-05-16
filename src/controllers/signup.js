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
              res.render('signup', {
                username,
                email,
                password: null,
                errorText: !username || !email || !password ? 'Username already taken. Please use login to your account or choose a new username' : null,
              });
            } else {
              next(e);
            }
          }))
      .catch(err => next(err));
  } else {
    res.render('signup', {
      username: username || null,
      email: email || null,
      password: null,
      errorText: !username || !email || !password ? 'Please enter your username, your email and a valid password, can not be empty' : null,
    });
  }
};
