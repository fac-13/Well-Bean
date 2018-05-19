const db = require('../database/db_connection');

const postReport = (userId, challengeId, report) =>
  db.query(
    `
    INSERT INTO chg_report (user_id, challenge_id, body)
    VALUES ($1, $2, $3)
    RETURNING id;
    `,
    [userId, challengeId, report],
  );

module.exports = postReport;
