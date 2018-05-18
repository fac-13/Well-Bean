const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');
// require test database build script
const runDbBuild = require('../../model/database/db_build');

test('Test update-challenge POST route with status complete', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/update-challenge/complete/1')
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

test('Test update-challenge POST route with status abandon', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/update-challenge/abandon/1')
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

test.skip('Test update-challenge POST route with invalid status', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/update-challenge/elephant/1')
        .expect(500)
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

test.skip('Test update-challenge POST route with invalid id', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/update-challenge/complete/one')
        .expect(500)
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
