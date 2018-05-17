const { getChallenge } = require('../model/queries/');

exports.get = (req, res, next) => {
  getChallenge(req.params.id)
    .then((challenges) => {
      const challenge = challenges[0];
      challenge.state = { challenges: true };
      res.render('challenge', challenge);
    })
    .catch(e => next(e));
};
