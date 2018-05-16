const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');
// require test database build script
const runDbBuild = require('../../model/database/db_build');

test('Test GET challenge detail view route', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .get('/challenge/1')
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('Morning'), 'response contains info about individual challenge');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});


test('Test GET challenge detail view route with invalid challenge id', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .get(`/challenge/${true}`)
        .expect(500)
        .expect('Content-Type', /html/)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('500'), 'response contains 500 error message');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
