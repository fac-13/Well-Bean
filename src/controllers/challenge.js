const { getChallenge } = require('../model/queries/');

exports.get = (req, res, next) => {
  const { referrer } = req.query;
  const { id: challengeId } = req.params;
  getChallenge(challengeId)
    .then((challenges) => {
      const challenge = challenges[0];
      challenge.state = { challenges: true };
      challenge.referrer = referrer;
      res.render('challenge', challenge);
    })
    .catch(e => next(e));
};
