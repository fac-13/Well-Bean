const {
  getAllChallenges,
} = require('../model/queries');

exports.get = (req, res, next) => {
  getAllChallenges().then(challenges => res.render('challenges', {
    challenges,
  })).catch((e) => {
    console.error(e);
    next(e);
  });
};
