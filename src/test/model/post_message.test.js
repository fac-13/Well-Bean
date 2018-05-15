const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
// require test database build script
const runDbBuild = require('../../model/database/db_build');
// require query functions
const {
  postMessage,
  getMessages,
} = require('../../model/queries/');

test('Test postMessage query', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes);
      return postMessage(3, 'Party.Sleep.Repeat');
    })
    .then(id => getMessages())
    .then((messages) => {
      t.ok([0], 'postMessage returns last added message');
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
