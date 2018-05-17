const bcrypt = require('bcrypt');

const { postNewUser } = require('../model/queries/');

exports.get = (req, res) => res.render('signup');

exports.post = (req, res, next) => {
  const {
    username, password, email, confirmPassword,
  } = req.body;
  if (username && password && email) {
    if (password === confirmPassword) {
      bcrypt.hash(password, 10)
        .then(hash =>
          postNewUser(username, hash, email)
            .then((newUser) => {
              req.session.userId = newUser[0].id;
              req.session.loggedIn = true;
              res.redirect('/');
            })
            .catch((e) => {
              if (e.detail.includes(email)) {
                res.render('signup', {
                  usernameValue: username,
                  error: 'Email already registered. Please login to your account instead',
                });
              } else if (e.detail.includes(username)) {
                res.render('signup', {
                  emailValue: email,
                  error: 'Username already taken. Please login to your account or choose a new username',
                });
              } else {
                next(e);
              }
            }))
        .catch(e => next(e));
    } else {
      res.render('signup', {
        usernameValue: username,
        emailValue: email,
        error: 'Your passwords don\'t match! Please try again',
      });
    }
  } else {
    res.render('signup', {
      usernameValue: username || null,
      emailValue: email || null,
      error: !username || !email || !password ? 'Please enter your username, your email and a valid password, can not be empty' : '',
    });
  }
};
