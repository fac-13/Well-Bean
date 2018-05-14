const db = require('../database/db_connection');

const updateUserChallenge = userChallengeId =>
  db.query(
    `
  UPDATE user_challenges
  SET status = 'complete'
  WHERE id=$1
  RETURNING id;
  `,
    [userChallengeId],
  );

module.exports = updateUserChallenge;
