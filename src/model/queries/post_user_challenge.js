const db = require('../database/db_connection');

const postUserChallenge = (userId, challengeId) =>
  db.query(`
  INSERT INTO user_challenges (user_id, challenges_id)
  VALUES ($1, $2)
  RETURNING id;
  `, [userId, challengeId]);

module.exports = postUserChallenge;
