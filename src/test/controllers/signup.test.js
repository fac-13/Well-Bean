const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');

test('Test signup route', (t) => {
  request(router)
    .get('/signup')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.ok(res);
      t.error(err);
      t.ok(res.text.includes('Signup'), 'response contains signup message');
      t.end();
    });
});
