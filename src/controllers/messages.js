const getMessages = require('./../model/queries/get_messages.js');
// [
//   {
//     id: 1,
//     body: 'Have a conversation with the sun',
//     username: 'TinkyWinky',
//     added: '10/05/2018',
//   }
// ];

exports.get = (req, res) => {
  getMessages()
    .then(allMessages => res.render('messages', {
      allMessages,
    }))
    .catch(e => console.log(e));
};
