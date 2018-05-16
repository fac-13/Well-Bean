const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');

test('Test home route', (t) => {
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
