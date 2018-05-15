const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
// require test database build script
const runDbBuild = require('../../model/database/db_build');
// require query functions
const { postNewUser } = require('../../model/queries/');

test('Test postNEwUser query', (t) => {
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return postNewUser('haydn', 'madskillz', 'email@email.com');
    })
    .then((newUser) => {
      t.ok(newUser[0].id, 'postNewUSer returns an id');
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
