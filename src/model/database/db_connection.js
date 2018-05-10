const pgp = require('pg-promise')(); // Always remember the '()' when using pg promise!
const url = require('url');
require('dotenv').config();

let { DATABASE_URL } = process.env;
let options = {};

// Check for test database environment
if (process.env.TRAVIS === 'true') {
  options = {
    database: 'travis_ci_test',
  };
} else {
  if (process.env.NODE_ENV === 'test') {
    DATABASE_URL = process.env.TEST_DATABASE_URL;
  }

  // Check for DATABASE_URL in .env
  if (!DATABASE_URL) throw new Error('DATABASE_URL must be set');

  // Connection parameters
  const params = url.parse(DATABASE_URL);
  const [user, password] = params.auth.split(':');

  options = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    max: process.env.DB_MAX_CONNECTIONS || 3,
    user,
    password,
    ssl: params.hostname !== 'localhost',
  };
}

module.exports = pgp(options);
