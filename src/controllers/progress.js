const { getUserChallenges } = require('../model/queries/');

exports.get = (req, res, next) => {
  const { userId, userName } = req.session;
  getUserChallenges(userId)
    .then((userChallenges) => {
      res.render('progress', { userChallenges, username: userName, state: { stats: true } });
    })
    .catch(e => next(e));
};
