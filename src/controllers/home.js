const { getActiveChallenge } = require('../model/queries/');


exports.get = (req, res, next) => {
  const userId = 1; // needs to be changed for cookie id
  getActiveChallenge(userId)
    .then(activeChallenge => res.render('home', activeChallenge[0]))
    .catch(e => next(e));
};
