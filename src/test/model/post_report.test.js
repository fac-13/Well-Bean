const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
// require test database build script
const runDbBuild = require('../../model/database/db_build');
// require query functions
const { postReport } = require('../../model/queries/');

test('Test postChallenge query', (t) => {
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return postReport(3, 3, 'This is a new test report');
    })
    .then((id) => {
      t.ok(id, 'postReport returns new report id');
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
