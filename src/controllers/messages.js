const getMessages = require('./../model/queries/get_messages.js');

exports.get = (req, res) => {
  getMessages()
    .then(allMessages =>
      res.render('messages', {
        allMessages,
      }));
};
