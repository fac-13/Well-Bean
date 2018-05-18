const { updateUserChallenge } = require('../model/queries/');

exports.post = (req, res, next) => {
  // const { userId } = req.headers;
  const { usch: userChallenge, status } = req.params;

  if (status === 'complete' || status === 'abandon') {
    console.log('updating issue: ', userChallenge, status);
    updateUserChallenge(userChallenge, status)
      .then(() => res.redirect('/'))
      .catch(e => next(e));
  } else {
    next('error');
  }
};
