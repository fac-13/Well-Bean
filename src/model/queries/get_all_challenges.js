const db = require('../database/db_connection');

const getAllChallenges = () =>
  db.query(`SELECT ch.id, ch.title, cat.name AS category FROM challenges AS ch
  LEFT JOIN categories AS cat ON ch.categories_id = cat.id
  ORDER BY ch.id desc;`);

module.exports = getAllChallenges;
