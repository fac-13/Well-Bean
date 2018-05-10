const challenge = {
  title: 'Morning Hydration',
  description: `Drink water in the morning to hydrate your body. 
                People don't realise you sleep for approximately 8 hours withydrate your body.
                Your body is dehydrated in the morning, get a good kickstart to the day!`,
  username: 'Tinky Winky',
  category: 'Nutrition',
};

exports.get = (req, res) => {
  res.render('challenge', challenge);
};
