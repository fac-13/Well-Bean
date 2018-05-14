const { postUserChallenge } = require('../model/queries/');

exports.post = (req, res, next) => {
  const userId = 1;
  const challengeId = req.params.id;

  postUserChallenge(userId, challengeId)
    .then(() => {
      res.redirect('/');
    })
    .catch((e) => {
      console.log(e);
      next(e);
    });
};
