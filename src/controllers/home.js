const { getActiveChallenge } = require('../model/queries/');

exports.get = (req, res, next) => {
  getActiveChallenge(1)
    .then(activeChallenge => res.render('home', activeChallenge[0]))
    .catch(e => next(e));
};
