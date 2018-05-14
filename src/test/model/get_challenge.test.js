const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
// require test database build script
const runDbBuild = require('../../model/database/db_build');
// require query functions
const { getChallenge } = require('../../model/queries/');

test('Test getChallenge query', (t) => {
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return getChallenge(2);
    })
    .then((challenge) => {
      t.equal(typeof challenge[0], 'object', 'getChallenge returns an object');
      t.equal(challenge[0].title, 'Node Express', 'response contains object with title');
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
