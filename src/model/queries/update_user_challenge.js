const db = require('../database/db_connection');

const updateUserChallenge = (id, status) =>
  db.query(
    `
  UPDATE user_challenges
  SET status = $2
  WHERE id= $1
  RETURNING id, status;
  `,
    [id, status],
  );

module.exports = updateUserChallenge;
