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

// Auxiliary function.
function createLoginCookie(server, loginDetails, done) {
  request(router)
    .post(server)
    .send(loginDetails)
    .end((error, response) => {
      if (error) {
        console.log(error);
      }
      const loginCookie = response.session;
      done(loginCookie);
    });
}

// Using auxiliary function in test cases.

test.only('Test home route with loggedIn false', (t) => {
  createLoginCookie('/login', {
    inputUser: 'tinky@winky.com',
    inputPassword: 'password123',
  }, (cookie) => {
    request(router)
      .get('/')
      .set('cookie', cookie)
      .expect(302)
      .end((err, res) => {
        t.error(err);
        t.ok(res.text.includes('/', 'redirects correctly'));
        t.end();
      });
  });
});
