const { getAllChallenges } = require('./../model/queries/index');

exports.get = (req, res) => {
  getAllChallenges().then(challenges => res.render('challenges', { challenges }));
};
