const challenges = [
  {
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    title: 'Title 2',
    description: 'Description 2',
  },
];

exports.get = (req, res) => {
  res.render('challenges', { challenges });
};
