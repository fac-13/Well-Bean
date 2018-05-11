const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('./../app.js');
// require test database build script
const runDbBuild = require('../model/database/db_build');
// require query function
const getAllChallenges = require('../model/queries/get_all_challenges');
const getChallenge = require('../model/queries/get_challenge');
const getMessages = require('../model/queries/get_messages');

test('test tape', (t) => {
  t.pass('tape is working');
  t.end();
});

test('Test home route', (t) => {
  request(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.ok(res);
      t.error(err);
      t.ok(res.text.includes('Welcome'), 'response contains welcome message');
      t.end();
    });
});

test('Test GET challenges list view route', (t) => {
  request(router)
    .get('/challenges')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('Title 1'), 'response contains challenge from list');
      t.end();
    });
});

test('Test GET challenge detail view route', (t) => {
  request(router)
    .get('/challenge/1')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('Morning'), 'response contains info about individual challenge');
      t.end();
    });
});

test('Test select challenge POST route', (t) => {
  request(router)
    .post('/user-challenge/1')
    .expect(302)
    .end((err, res) => {
      t.error(err);
      t.ok(res, 'response has something from query');
      t.end();
    });
});

test('Test GET messages view route', (t) => {
  request(router)
    .get('/messages')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('stuff'), 'response contains message from list');
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
      return getAllChallenges();
    })
    .then((challenges) => {
      t.deepEqual(
        challenges[0].title,
        expected,
        'getAllChallenges returns first challenge title in table',
      );
      t.end();
    })
    .catch(t.error);
});

test('Test GET challenge detail view', (t) => {
  const expected = 'object';
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return getChallenge(2);
    })
    .then((challenge) => {
      t.equal(typeof challenge, expected, 'getChallenge returns an object');
      t.end();
    })
    .catch(t.error);
});


test('Test get message query', (t) => {
  const expected = 'Strut your stuff!';
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return getMessages();
    })
    .then((messages) => {
      t.equal(
        messages[0].body,
        expected,
        'getMessages returns first message in table',
      );
      t.end();
    })
    .catch(t.error);
});
