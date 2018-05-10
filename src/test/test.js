const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('./../app.js');
// require test database build script
const runDbBuild = require('../model/database/db_build');
// require query function
const getAllChallenges = require('../model/queries/get_all_challenges');

test('test tape', (t) => {
  t.pass('tape is working');
  t.end();
});

test('Test home route running', (t) => {
  request(router)
    .get('/')
    .expect(200)
    .end((err, res) => {
      t.ok(res);
      t.error(err);
      t.end();
    });
});

test('Test challenges route running', (t) => {
  request(router)
    .get('/challenges')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.ok(res.text.includes('Title 1'), 'Test returns expected text');
      t.error(err);
      t.end();
    });
});

// **********************************************
// **************database tests******************
// **********************************************

test('Test for the first row of challenges query', (t) => {
  const expected = 'Morning Hydration';
  runDbBuild()
    .then((res) => {
      t.ok(res);
      getAllChallenges()
        .then((challenges) => {
          t.deepEqual(challenges[0].title, expected, 'getAllChallenges returns first challenge in table');
          t.end();
        });
    })
    .catch(t.error);
});

