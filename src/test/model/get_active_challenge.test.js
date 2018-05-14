const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
// require test database build script
const runDbBuild = require('../../model/database/db_build');
// require query functions
const { getActiveChallenge } = require('../../model/queries/');

test('Test getActiveChallenges query', (t) => {
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return getActiveChallenge();
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
