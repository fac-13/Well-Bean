const db = require('../database/db_connection');

const getUser = user =>
  db.query(`
  SELECT id, username, password FROM users
  WHERE username = $1 OR email = $1;
  `, [user]);

module.exports = getUser;
