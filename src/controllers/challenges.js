const { getAllChallenges } = require('./../model/queries');

exports.get = (req, res) => {
  getAllChallenges().then(challenges => res.render('challenges', { challenges }));
};
