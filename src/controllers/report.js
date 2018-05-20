const { getChallenge, postReport } = require('../model/queries/');

exports.get = (req, res, next) => {
  const { challenge: challengeId, referrer } = req.query;
  getChallenge(challengeId)
    .then((result) => {
      const challenge = result[0];
      challenge.referrer = referrer;
      res.render('report', challenge);
    })
    .catch(e => next(e));
};

exports.post = (req, res, next) => {
  const { challenge: challengeId, report } = req.body;
  const { userId } = req.session;
  postReport(userId, challengeId, report)
    .then(() => res.redirect('/'))
    .catch(e => next(e));
};
