const db = require('../database/db_connection');

const getUserChallenges = userId =>
  db.query(
    `
    SELECT ch.title, cat.name AS category, count(ch.title) AS total
    FROM challenges AS ch
    LEFT JOIN categories AS cat ON ch.category_id = cat.id
    INNER JOIN user_challenges AS uc  ON ch.id = uc.challenge_id
    INNER JOIN users AS u ON u.id = uc.user_id
    WHERE uc.user_id = $1
    GROUP BY ch.title, cat.name
  `,
    [userId],
  );

module.exports = getUserChallenges;
