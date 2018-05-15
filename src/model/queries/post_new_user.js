const db = require('../database/db_connection');

const postNewUser = (userName, password, email) =>
  db.query(
    `
  INSERT INTO users (username, password, email)
  VALUES ($1, $2, $3)
  RETURNING id;
  `,
    [userName, password, email],
  );

module.exports = postNewUser;
