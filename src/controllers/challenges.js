const challenges = [
  {
    id: 1,
    title: 'Title 1',
    category: 'Fitness',
    username: 'Tinky Winky',
  },
  {
    id: 2,
    title: 'Title 2',
    category: 'Mindfulness',
    username: 'LaaLaa',
  },
  {
    id: 3,
    title: 'Title 3',
    category: 'Home',
    username: 'Po',
  },
  {
    id: 4,
    title: 'Title 4',
    category: 'Romance',
    username: 'Dipsy',
  },
];

exports.get = (req, res) => {
  res.render('challenges', { challenges });
};
