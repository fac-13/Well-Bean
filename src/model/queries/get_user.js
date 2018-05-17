const db = require('../database/db_connection');

const getUser = userName =>
  db.query(`
  SELECT * FROM users WHERE username = $1;
  `, [userName]);

module.exports = getUser;
