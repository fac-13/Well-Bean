const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');
// require test database build script
const runDbBuild = require('../../model/database/db_build');

test('Test login GET route', (t) => {
  request(router)
    .get('/login')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('Login'), 'response contains login message');
      t.end();
    });
});

// the test below is being skipped at present - resolve when login routes are rebuilt...
test('Test login POST route - good email', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/login')
        .send({
          inputUser: 'tinky@winky.com',
          inputPassword: 'password123',
        })
        .expect(302)
        .end((err, res) => {
          t.error(err);
          t.ok(res, 'succesfully redirected to homepage');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test login POST route - good username', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/login')
        .send({
          inputUser: 'Po',
          inputPassword: 'password123',
        })
        .expect(302)
        .end((err, res) => {
          t.error(err);
          t.ok(res, 'succesfully redirected to homepage');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test login POST route username or email does not exist', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/login')
        .send({
          inputUser: 'elephant',
          inputPassword: 'password123',
        })
        .expect(200)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('User &quot;elephant&quot; does not exist'), 'warning issued that user does not exist');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test login POST route - incorrect password', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/login')
        .send({
          inputUser: 'Po',
          inputPassword: 'password13',
        })
        .expect(200)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('Password is incorrect'), 'warning issued that password is incorrect');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test login POST route - bad password', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/login')
        .send({
          inputUser: 'Po',
          inputPassword: true,
        })
        .expect(500)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('500'), '500 error page reached');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test login POST route - bad username', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/login')
        .send({
          inputUser: true,
          inputPassword: 'password',
        })
        .expect(500)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('500'), '500 error page reached');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
