const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');

test.only('Test report GET route', (t) => {
  request(router)
    .get('/report?challenge=3')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('Report'), 'response contains report message');
      t.end();
    });
});
