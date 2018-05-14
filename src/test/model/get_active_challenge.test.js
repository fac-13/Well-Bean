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
      return getActiveChallenge(1);
    })
    .then((challenges) => {
      t.deepEqual(
        challenges[0].title,
        'Node Express',
        'getActiveChallenge returns user 1\'s active challenge title',
      );
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
