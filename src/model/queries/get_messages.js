const db = require('../database/db_connection');

const getMessages = () =>
  db.query(`
    SELECT m.id, m.body, to_char(m.added, 'Month DD, YYYY at HH12:MI pm') AS time, u.username
    FROM messages AS m
    LEFT JOIN users AS u ON m.user_id = u.id
    ORDER BY m.id desc
    `);

module.exports = getMessages;
