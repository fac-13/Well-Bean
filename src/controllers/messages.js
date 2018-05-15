const { getMessages } = require('../model/queries/');

exports.get = (req, res, next) => {
  getMessages()
    .then(allMessages => res.render('messages', { allMessages }))
    .catch(e => next(e));
};
