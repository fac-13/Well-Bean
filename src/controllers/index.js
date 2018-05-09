const express = require('express');

const router = express.Router();

// require controllers
const home = require('./home');
const challenges = require('./challenges');

// set up routes
router.get('/', home.get);
router.get('/challenges', challenges.get);

module.exports = router;
