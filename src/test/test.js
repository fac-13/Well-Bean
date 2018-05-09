const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('./../app.js');

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
      t.ok(res.text.includes('ored'), 'Test returns expected text');
      t.error(err);
      t.end();
    });
});
