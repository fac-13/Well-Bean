const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');
// require test database build script
const runDbBuild = require('../../model/database/db_build');

test('Test complete-challenge POST route', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/complete-challenge/1')
        .set('Cookie', 'userId=1')
        .expect(302)
        .end((err, res) => {
          t.error(err);
          t.ok(res, 'response has something from query');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
