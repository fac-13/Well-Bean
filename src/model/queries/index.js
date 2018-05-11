const getAllChallenges = require('./get_all_challenges');
const getChallenge = require('./get_challenge');
const getMessages = require('./get_messages');

const postChallenge = require('./post_challenge');
const postUserChallenge = require('./post_user_challenge');

module.exports = {
  getAllChallenges,
  getChallenge,
  getMessages,
  postChallenge,
  postUserChallenge,
};
