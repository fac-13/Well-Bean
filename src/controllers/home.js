const { getActiveChallenge } = require('../model/queries/');


exports.get = (req, res, next) => {
  if (req.session.loggedIn) {
    const { userId } = req.session;
    getActiveChallenge(userId)
      .then((activeChallenges) => {
        const activeChallenge = activeChallenges[0] || {};
        activeChallenge.state = { home: true };
        console.log(activeChallenge);
        res.render('home', activeChallenge);
      })
      .catch(e => next(e));
  } else { res.redirect('/login'); }
};
