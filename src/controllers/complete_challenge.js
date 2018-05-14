const { updateUserChallenge } = require('../model/queries/');

exports.post = (req, res, next) => {
  // const { userId } = req.headers;
  const userChallengeId = req.params.id;

  updateUserChallenge(userChallengeId)
    .then(() => res.redirect('/'))
    .catch(e => next(e));
};
