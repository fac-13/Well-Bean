const { getAllChallenges } = require('../model/queries');

exports.get = (req, res, next) => {
  getAllChallenges()
    .then(challenges => res.render('challenges', {
      state: { challenges: true },
      challenges,
    }))
    .catch(e => next(e));
};
