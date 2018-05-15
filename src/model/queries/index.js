const getAllChallenges = require('./get_all_challenges');
const getChallenge = require('./get_challenge');
const getMessages = require('./get_messages');
const getActiveChallenge = require('./get_active_challenge');

const postChallenge = require('./post_challenge');
const postUserChallenge = require('./post_user_challenge');

const updateUserChallenge = require('./update_user_challenge');

module.exports = {
  getAllChallenges,
  getActiveChallenge,
  getChallenge,
  getMessages,
  postChallenge,
  postUserChallenge,
  updateUserChallenge,
};
