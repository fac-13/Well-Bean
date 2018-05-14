const { postChallenge } = require('../model/queries/');

exports.get = (req, res) => { res.render('add_challenge'); };

exports.post = (req, res, next) => {
  console.log('fuck');
  const {
    categoryId,
    userId,
    title,
    description,
  } = req.body;
  if (!title) res.render('add_challenge', { error: 'title' });
  if (!description) res.render('add_challenge', { error: 'description' });
  postChallenge(categoryId, userId, title, description)
    .then(() => res.redirect('/challenges'))
    .catch(e => next(e));
};
