const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');
// require test database build script
const runDbBuild = require('../../model/database/db_build');

test('Test update-challenge POST route with no session cookie', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/update-challenge/complete/1')
        .expect(302)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('/'), 'response has something from query');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

// Promise to sign in & grab the cookie session
const createLoginCookie = new Promise((resolve, reject) => {
  request(router)
    .post('/login')
    .send({
      inputUser: 'tinky@winky.com',
      inputPassword: 'password123',
    })
    .end((error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response.headers['set-cookie']);
    });
});

test('Test update-challenge POST route with status complete', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      return createLoginCookie;
    })
    .then((cookie) => {
      request(router)
        .post('/update-challenge/complete/1')
        .set('cookie', cookie)
        .expect(302)
        .end((err, res) => {
          t.error(err);
          t.ok(res, 'response has something from query');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test update-challenge POST route with status abandon', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      return createLoginCookie;
    })
    .then((cookie) => {
      request(router)
        .post('/update-challenge/abandon/1')
        .set('cookie', cookie)
        .expect(302)
        .end((err, res) => {
          t.error(err);
          t.ok(res, 'response has something from query');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test update-challenge POST route with invalid status', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      return createLoginCookie;
    })
    .then((cookie) => {
      request(router)
        .post('/update-challenge/elephant/1')
        .set('cookie', cookie)
        .expect(500)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('500'), 'response contains 500 error message');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test update-challenge POST route with invalid id', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      return createLoginCookie;
    })
    .then((cookie) => {
      request(router)
        .post('/update-challenge/complete/one')
        .set('cookie', cookie)
        .expect(500)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('500'), 'response contains 500 error message');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
