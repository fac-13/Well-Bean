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

// Callback function to sign in & grab the cookie session
function createLoginCookie(server, loginDetails, callback) {
  request(router)
    .post(server)
    .send(loginDetails)
    .expect(302)
    .end((error, response) => {
      if (error) {
        throw (error);
      }
      const loginCookie = response.headers['set-cookie'];
      callback(loginCookie);
    });
}

// Using auxiliary function in test cases.

test('Test home route with loggedIn true', (t) => {
  createLoginCookie('/login', {
    inputUser: 'tinky@winky.com',
    inputPassword: 'password123',
  }, (cookie) => {
    request(router)
      .get('/')
      .set('cookie', cookie)
      .expect(200)
      .end((err, res) => {
        t.error(err);
        t.ok(res.text.includes('Welcome', 'access to homepage'));
        t.end();
      });
  });
});
