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
      t.equal(
        uRes[0].password,
        '$2b$10$GyfG3Buz.LZ7uF6KsnaQveq.s.gibBhHXYJ8PACpcSzfrCdwn/72S',
        "Dipsy's password is correct",
      );
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
