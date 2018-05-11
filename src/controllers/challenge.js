const { getChallenge } = require('../model/queries/');

exports.get = (req, res) => {
  getChallenge(req.params.id).then(challenge => res.render('challenge', challenge[0]));
};
