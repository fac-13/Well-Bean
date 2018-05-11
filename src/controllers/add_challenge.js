const { postChallenge } = require('../model/queries/');

exports.get = (req, res) => {
  res.render('add_challenge');
};

exports.post = (req, res) => {
  const {
    categoryId, userId, title, description,
  } = req.body;

  postChallenge(categoryId, userId, title, description)
    .then(() => {
      res.redirect('/challenges');
    })
    .catch(e => console.log(e));
};
