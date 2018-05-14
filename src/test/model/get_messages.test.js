const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
// require test database build script
const runDbBuild = require('../../model/database/db_build');
// require query functions
const { getMessages } = require('../../model/queries/');

test('Test getMessages query', (t) => {
  const expected = 'Strut your stuff!';
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return getMessages();
    })
    .then((messages) => {
      t.equal(messages[0].body, expected, 'first message in response is as expected');
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
