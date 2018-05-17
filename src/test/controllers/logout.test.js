const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');
// require test database build script

test('Test logout GET route', (t) => {
  request(router)
    .get('/logout')
    .expect(302)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('/login', 'redirects correctly'));
      t.end();
    });
});
