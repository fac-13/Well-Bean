const { getActiveChallenge } = require('../model/queries/');


exports.get = (req, res, next) => {
  if (req.session.loggedIn) {
    const { userId } = req.session; // needs to be changed for cookie id
    getActiveChallenge(userId)
      .then(activeChallenge => res.render('home', activeChallenge[0]))
      .catch(e => next(e));
  } else { res.redirect('/login'); }
};
