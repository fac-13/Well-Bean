const db = require('./../database/db_connection');

const getAllChallenges = () => db.query('SELECT * FROM challenges');

module.exports = getAllChallenges;

