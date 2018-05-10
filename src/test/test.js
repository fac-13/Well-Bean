const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('./../app.js');
// require test databse build script
const runDbBuild = require('../model/database/db_build');

test('test tape', (t) => {
  t.pass('tape is working');
  t.end();
});

test('Test home route running', (t) => {
  request(router)
    .get('/')
    .expect(200)
    .end((err, res) => {
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

test('Test for the first row of challenges query', (t) => {
  const expected = {
    id: 1, categories_id: 2, user_id: null, title: 'Morning Hydration', description: 'Drink water in the morning to hydrate your body. People don\'t realise you sleep for approximately 8 hours without drinking water. Your body is dehydrated in the morning, get a good kickstart to the day!',
  };
  runDbBuild((err, res) => {
    getAllChallenges().then((res) => {
      t.deepEqual(res[0], expected, 'getAllChallenges returns first challenge in table');
      t.end();
    });
  });
});

