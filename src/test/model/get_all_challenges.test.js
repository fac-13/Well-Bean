const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
// require test database build script
const runDbBuild = require('../../model/database/db_build');
// require query functions
const { getAllChallenges } = require('../../model/queries/');

test('Test getAllChallenges query', (t) => {
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return getAllChallenges();
    })
    .then((challenges) => {
      t.deepEqual(
        challenges[0].title,
        'Lunch walk',
        'getAllChallenges returns first challenge title in table',
      );
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
