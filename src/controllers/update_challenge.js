const { updateUserChallenge } = require('../model/queries/');

exports.post = (req, res, next) => {
  // const { userId } = req.headers;
  const { id, status } = req.params;

  if (status === 'complete' || status === 'abandon') {
    updateUserChallenge(id, status)
      .then(() => res.redirect('/'))
      .catch(e => next(e));
  } else {
    next('error');
  }
};
