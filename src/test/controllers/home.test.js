const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');

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
