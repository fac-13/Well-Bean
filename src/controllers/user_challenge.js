const { postUserChallenge } = require('../model/queries/');

exports.post = (req, res) => {
  const userId = 1;
  const challengeId = parseInt(req.params.id, 10);

  postUserChallenge(userId, challengeId)
    .then(() => {
      res.redirect('/');
    })
    .catch(e => console.log(e));
};
