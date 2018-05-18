const { getChallenge } = require('../model/queries/');

exports.get = (req, res, next) => {
  const { challenge: challengeId, referrer } = req.query;
  // const { userId } = req.session;
  getChallenge(challengeId)
    .then((result) => {
      const challenge = result[0];
      challenge.referrer = referrer;
      res.render('report', challenge);
    })
    .catch(e => next(e));
};

// exports.post = (req, res) => res.send('Hello Report');
