const db = require('../database/db_connection');

const postChallenge = (categoryId, userId, title, description) =>
  db.query(
    `
  INSERT INTO challenges (category_id, user_id, title, description)
  VALUES ($1, $2, $3, $4)
  RETURNING id;
  `,
    [categoryId, userId, title, description],
  );

module.exports = postChallenge;
