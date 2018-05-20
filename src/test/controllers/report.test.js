const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');
// require test database build script
const runDbBuild = require('../../model/database/db_build');
// require test login function from utils
const { testLogin } = require('../utils/test_login');

test('Test report GET route', (t) => {
  request(router)
    .get('/report?challenge=3')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('Report'), 'response contains report message');
      t.end();
    });
});

test('Test report GET route with bad data - throw an error', (t) => {
  request(router)
    .get('/report?challenge=false')
    .expect(500)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('500'), 'response has 500 error message');
      t.end();
    });
});

test('Test report POST route', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      testLogin(
        '/login',
        {
          inputUser: 'tinky@winky.com',
          inputPassword: 'password123',
        },
        (cookie) => {
          request(router)
            .post('/report')
            .set('cookie', cookie)
            .send({
              challenge: 3,
              report: 'this is a test report for the post report route',
            })
            .expect(302)
            .end((err, res) => {
              t.error(err);
              t.ok(res.text.includes('/'), 'redirected to home');
              t.end();
            });
        },
      );
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test report POST route with bad insert data - throw an error', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      testLogin(
        '/login',
        {
          inputUser: 'tinky@winky.com',
          inputPassword: 'password123',
        },
        (cookie) => {
          request(router)
            .post('/report')
            .set('cookie', cookie)
            .send({
              challenge: false,
              report: 'this is bad data for the post report route',
            })
            .expect(500)
            .end((err, res) => {
              t.error(err);
              t.ok(res.text.includes('500'), 'response has 500 error message');
              t.end();
            });
        },
      );
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
