const db = require('../database/db_connection');

const postNewUser = (userName, hashedPassword, email) =>
  db.query(
    `
  INSERT INTO users (username, password, email)
  VALUES ($1, $2, $3)
  RETURNING id;
  `,
    [userName, hashedPassword, email],
  );

module.exports = postNewUser;
