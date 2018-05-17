const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');
const cookieSession = require('cookie-session'); // requiring cooke-session for test

test('Test home route with valid userId', (t) => {
  request(router)
    .get('/')
    .set({ userid: 1 })
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('Welcome'), 'response contains welcome message');
      t.end();
    });
});

test('Test home route with invalid userId', (t) => {
  request(router)
    .get('/')
    .set({ userid: 'one' })
    .expect(500)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('500'), 'response contains 500 error message');
      t.end();
    });
});

test('Test home route with loggedIn false', (t) => {
  request(router)
    .get('/')
    .expect(302)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('/login', 'redirects correctly'));
      t.end();
    });
});
