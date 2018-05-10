const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('./../app.js');

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
      t.error(err);
      t.ok(res.text.includes('<html>'), 'response is an html file');
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
      t.ok(res.text.includes('Title 1'), 'response contains entry from list');
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
      t.ok(
        res.text.includes('Morning'),
        'response contains info about individual challenge',
      );
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

// **********************************************
// **************database tests******************
// **********************************************
