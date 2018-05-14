const db = require('../database/db_connection');

const postUserChallenge = (userId, challengeId) =>
  db.query(
    `
  INSERT INTO user_challenges (user_id, challenges_id, status)
  VALUES ($1, $2, 'active')
  RETURNING id;
  `,
    [userId, challengeId],
  );

module.exports = postUserChallenge;
