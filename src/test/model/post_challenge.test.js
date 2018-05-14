const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
// require test database build script
const runDbBuild = require('../../model/database/db_build');
// require query functions
const {
  postChallenge,
  getAllChallenges,
} = require('../../model/queries/');

test('Test postChallenge query', (t) => {
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return postChallenge(3, 3, 'Add new', 'This is a new test challenge');
    })
    .then(() => getAllChallenges())
    .then((res) => {
      t.ok(res, 'postChallenge returns last added item');
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
