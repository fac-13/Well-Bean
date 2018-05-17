const express = require('express');

const router = express.Router();

// require controllers
const home = require('./home');
const signup = require('./signup');
const login = require('./login');
const challenges = require('./challenges');
const challenge = require('./challenge');
const addChallenge = require('./add_challenge');
const userChallenge = require('./user_challenge');
const progress = require('./progress');
const updateChallenge = require('./update_challenge');
const messages = require('./messages');
const addMessage = require('./add_message');
const error = require('./error');

// set up routes
router.get('/', home.get);
router.get('/signup', signup.get); // get signup form
router.get('/login', login.get); // get login form
router.get('/challenges', challenges.get);
router.get('/challenge/:id', challenge.get);
router.get('/add-challenge', addChallenge.get); // get addChallenge form
router.get('/messages', messages.get);
router.get('/add-message', addMessage.get); // get addMessage form
router.get('/progress', progress.get); // get all user challenges

router.post('/user-challenge/:id', userChallenge.post); // select a challenge
router.post('/update-challenge/:status/:id', updateChallenge.post); // update user-challenge
router.post('/add-challenge', addChallenge.post);
router.post('/add-message', addMessage.post);
router.post('/signup', signup.post);
router.post('/login', login.post);

router.use(error.client);
router.use(error.server);

module.exports = router;
