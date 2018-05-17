const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
// require test database build script
const runDbBuild = require('../../model/database/db_build');
// require query functions
const { getUser } = require('../../model/queries/');

test('Test getUser query', (t) => {
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return getUser('Dipsy');
    })
    .then((uRes) => {
      t.equal(uRes[0].password, 'password123', 'Dipsy\'s password is exposed');
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

