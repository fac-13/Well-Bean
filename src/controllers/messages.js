const messages = [
  {
    id: 1,
    body: 'Have a conversation with the sun',
    username: 'TinkyWinky',
    added: '10/05/2018',
  },
  {
    id: 2,
    body: 'Ride a scooter',
    username: 'LaaLaa',
    added: '10/05/2018',
  },
  {
    id: 3,
    body: 'Hide from Po',
    username: 'Dipsy',
    added: '10/05/2018',
  },
  {
    id: 4,
    body: 'Po...',
    username: 'Po',
    added: '10/05/2018',
  },
];

exports.get = (req, res) => {
  res.render('messages', { messages });
};
