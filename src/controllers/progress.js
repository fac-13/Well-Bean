const { getUserChallenges } = require('../model/queries/');

exports.get = (req, res, next) => {
  const { userId, username } = req.session;
  getUserChallenges(userId)
    .then()
    .then(userChallenges => res.render('progress', { userChallenges }))
    .catch(e => next(e));
};
