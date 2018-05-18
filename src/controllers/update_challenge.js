const { updateUserChallenge } = require('../model/queries/');

exports.post = (req, res, next) => {
  const { userId } = req.session;
  if (userId) {
    const { usch: userChallenge, status } = req.params;

    if (status === 'complete' || status === 'abandon') {
      updateUserChallenge(userChallenge, status)
        .then(() => res.redirect('/'))
        .catch(e => next(e));
    } else {
      next('error');
    }
  } else {
    res.redirect('/');
  }
};
