const express = require('express');

const router = express.Router();
const home = require('./home');
const challenges = require('./challenges');

router.get('/', home.get);
router.get('/challenges', challenges.get);

module.exports = router;
