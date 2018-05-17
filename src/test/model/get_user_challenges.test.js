const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
// require test database build script
const runDbBuild = require('../../model/database/db_build');
// require query functions
const { getUserChallenges } = require('../../model/queries/');

test('Test getUserChallenges query', (t) => {
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return getUserChallenges(1);
    })
    .then((challenges) => {
      const expected = ['Morning Hydration', 'Node Express'];
      const userChallenges = challenges.map(challenge => challenge.title);
      t.deepEqual(expected, userChallenges, 'Query returns all user challenges');
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

