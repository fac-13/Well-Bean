const { postMessage } = require('../model/queries/');

exports.get = (req, res) => { res.render('add_message'); };

exports.post = (req, res, next) => {
  // console.log(req.body);
  const {
    userId,
    body,
  } = req.body;
  if (!body) res.render('add_message', { error: 'message' });
  postMessage(userId, body)
    .then(() => res.redirect('/messages'))
    .catch(e => next(e));
};
