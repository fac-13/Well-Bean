const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');

test('Test invalid route', (t) => {
  request(router)
    .get('/gibberish')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('404'), 'response contains 404 error message');
      t.end();
    });
});
