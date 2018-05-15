const path = require('path');
const { QueryFile } = require('pg-promise');
const db = require('./db_connection');

// used to execute a database build file
const sql = file => QueryFile(path.join(__dirname, file), { minify: true });

const build = sql('./db_build.sql');

// database building for test
const runDbBuild = () => db.query(build);

// runDbBuild();

module.exports = runDbBuild;
