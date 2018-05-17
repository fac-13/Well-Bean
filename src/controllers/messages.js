const { getMessages } = require('../model/queries/');

exports.get = (req, res, next) => {
  getMessages()
    .then(allMessages => res.render('messages', {
      state: { messages: true },
      allMessages,
    }))
    .catch(e => next(e));
};
