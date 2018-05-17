const { postChallenge } = require('../model/queries/');

exports.get = (req, res) => {
  res.render('add_challenge');
};

exports.post = (req, res, next) => {
  const {
    categoryId, userId, title, description,
  } = req.body;

  if (title && description && categoryId) {
    postChallenge(categoryId, userId, title, description)
      .then(() => res.redirect('/challenges'))
      .catch(e => next(e));
  } else {
    res.render('add_challenge', {
      state: { challenges: true },
      titleValue: title || null,
      categoryId: parseInt(categoryId, 10),
      descriptionValue: description || null,
      errorText: !title || !description ? 'Please enter a title and description, can not be empty' : null,
      errorCategory: !categoryId ? 'Please choose a category' : null,
    });
  }
};
