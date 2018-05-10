const challenges = [
  {
    title: 'Title 1',
    description: 'Description 1',
    username: 'Tinky Winky',
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    username: 'LaaLaa',
  },
  {
    title: 'Title 3',
    description: 'Description 3',
    username: 'Po',
  },
  {
    title: 'Title 4',
    description: 'Description 4',
    username: 'Dipsy',
  },
];

exports.get = (req, res) => {
  res.render('challenges', { challenges });
};
