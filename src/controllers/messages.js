const getMessages = require('./../model/queries/get_messages.js');

exports.get = (req, res, next) => {
  getMessages()
    .then(allMessages => res.render('messages', { allMessages }))
    .catch(e => next(e));
};
