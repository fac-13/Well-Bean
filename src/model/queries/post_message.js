const db = require('../database/db_connection');

const postMessage = (userId, body) => {
  db.query(`INSERT INTO messages (user_id, body)
  VALUES ($1, $2)
  RETURNING id;`, [userId, body]);
};
module.exports = postMessage;
