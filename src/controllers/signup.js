const { postNewUser } = require('../model/queries/');
const bcrypt = require('bcrypt');


exports.get = (req, res) => res.render('signup');

exports.post = (req, res, next) => {
  const saltRounds = 10;
  const {
    username, password, email, confirm_password: confirmPassword,
  } = req.body;
  if (username && password && email && confirmPassword) {
    if (password !== confirmPassword) {
      res.render('signup', {
        usernameValue: username,
        emailValue: email,
        errorText: 'Your passwords don\'t match! Please try again',
      });
    } else {
      bcrypt.hash(password, saltRounds)
        .then(hash =>
          postNewUser(username, hash, email)
            .then(() => res.redirect('/'))
            .catch((e) => {
              if (e.detail.includes(`(${username}) already exists.`)) {
                res.render('signup', {
                  usernameValue: username,
                  emailValue: email,
                  errorText: 'Username already taken. Please login to your account or choose a new username',
                });
              } else if (e.detail.includes(`(${email}) already exists.`)) {
                res.render('signup', {
                  usernameValue: username,
                  errorText: 'Email already registered. Please login to your account instead',
                });
              } else {
                next(e);
              }
            }))
        .catch(err => next(err));
    }
  } else {
    res.render('signup', {
      usernameValue: username || null,
      emailValue: email || null,
      errorText: !username || !email || !password ? 'Please enter your username, your email and a valid password, can not be empty' : null,
    });
  }
};
