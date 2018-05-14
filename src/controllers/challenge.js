const { getChallenge } = require('../model/queries/');

exports.get = (req, res, next) => {
  getChallenge(req.params.id).then(challenge => res.render('challenge', challenge[0])).catch((e) => {
    console.error(e);
    next(e);
  });
};
