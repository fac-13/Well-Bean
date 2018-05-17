const bcrypt = require('bcrypt');

const { getUser } = require('../model/queries/');

exports.get = (req, res) => {
  res.render('login');
};

exports.post = (req, res, next) => {
  const { inputUser, inputPassword } = req.body;
  getUser(inputUser)
    .then((user) => {
      if (user[0]) {
        const { id, username, password } = user[0];
        bcrypt.compare(inputPassword, password)
          .then(() => res.redirect('/'))
          .catch(() => res.render('login', { error: 'Password is incorrect' }));
      } else {
        res.render('login', { error: `User "${inputUser}" does not exist` });
      }
    })
    .catch(e => next(e));
};
