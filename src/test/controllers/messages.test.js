const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');
// require test database build script
const runDbBuild = require('../../model/database/db_build');

test('Test select challenge POST route', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .get('/messages')
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('stuff'), 'response contains message from list');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
