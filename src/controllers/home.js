const { getActiveChallenge } = require('../model/queries/');


exports.get = (req, res, next) => {
  if (req.session.loggedIn) {
    const { userId } = req.session; // needs to be changed for cookie id
    getActiveChallenge(userId)
      .then((activeChallenges) => {
        const activeChallenge = activeChallenges[0];
        activeChallenge.state = { home: true };
        res.render('home', activeChallenge);
      })
      .catch(e => next(e));
  } else { res.redirect('/login'); }
};
