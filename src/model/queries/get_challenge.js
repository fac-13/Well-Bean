const db = require('./../database/db_connection');

const getChallenge = challengeID => db.query('SELECT * FROM challenges WHERE id=$1', [challengeID]);

module.exports = getChallenge;
