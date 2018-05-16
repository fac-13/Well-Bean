const { postMessage } = require('../model/queries/');

exports.get = (req, res) => {
  res.render('add_message');
};

exports.post = (req, res, next) => {
  const { userId, body } = req.body;
  if (body) {
    postMessage(userId, body)
      .then(() => res.redirect('/messages'))
      .catch(e => next(e));
  } else {
    res.render('add_message', { error: 'Please write a message, can not be empty' });
  }
};
