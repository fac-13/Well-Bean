const db = require('../database/db_connection');

const getChallenge = challengeID =>
  db.query(`SELECT ch.id, ch.title, ch.description, ch.added, cat.name AS category, u.username 
    FROM challenges AS ch
    LEFT JOIN categories AS cat ON ch.categories_id = cat.id
    LEFT JOIN users AS u ON ch.user_id = u.id
    WHERE ch.id = $1;
    `, [challengeID]);

module.exports = getChallenge;
