const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
// require test database build script
const runDbBuild = require('../../model/database/db_build');
// require query functions
const { postUserChallenge } = require('../../model/queries/');

test('Test postUserChallenge query', (t) => {
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return postUserChallenge(2, 2);
    })
    .then((UserChallenge) => {
      t.ok(UserChallenge[0].id, 'postUserChallenge returns an id');
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
