const express = require('express');

const router = express.Router();

// require controllers
const home = require('./home');
const challenges = require('./challenges');
const challenge = require('./challenge');
const addChallenge = require('./add_challenge');
const userChallenge = require('./user_challenge');

const updateChallenge = require('./update_challenge');
const messages = require('./messages');
const error = require('./error');

// set up routes
router.get('/', home.get);
router.get('/challenges', challenges.get);
router.get('/challenge/:id', challenge.get);
router.get('/add-challenge', addChallenge.get); // get addChallenge form
router.get('/messages', messages.get);

router.post('/user-challenge/:id', userChallenge.post); // select a challenge
router.post('/update-challenge/:status/:id', updateChallenge.post);
router.post('/add-challenge', addChallenge.post);

router.use(error.client);
router.use(error.server);

module.exports = router;
