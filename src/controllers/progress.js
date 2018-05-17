const { getUserChallenges } = require('../model/queries/');

exports.get = (req, res, next) => {
  const { userId, userName } = req.session;
  getUserChallenges(userId)
    .then()
    .then(userChallenges => res.render('progress', { userChallenges, userName }))
    .catch(e => next(e));
};
