const { getChallenge, postChallenge } = require('../model/queries/');

exports.get = (req, res) => {
  getChallenge(req.params.id).then(challenge => res.render('challenge', challenge[0]));
};

exports.post = (req, res) => {
  const categoryId = 1;
  const userId = 1;
  const title = 'one title';
  const description = 'one description';

  postChallenge(categoryId, userId, title, description)
    .then(() => {
      res.redirect('/challenges');
    })
    .catch(e => console.log(e));
};
