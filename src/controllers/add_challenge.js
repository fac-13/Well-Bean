const { postChallenge } = require('../model/queries/');

exports.get = (req, res) => {
  res.render('add_challenge');
};

exports.post = (req, res, next) => {
  const {
    categoryId, userId, title, description,
  } = req.body;

  if (title && description) {
    postChallenge(categoryId, userId, title, description)
      .then(() => res.redirect('/challenges'))
      .catch(e => next(e));
  } else {
    res.render('add_challenge', { error: 'Please enter a title and description, can not be empty' });
  }
};
