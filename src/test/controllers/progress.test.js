const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');
const runDbBuild = require('../../model/database/db_build');
// require query functions
const { getUserChallenges } = require('../../model/queries/');

test('Test progress route', (t) => {
  request(router)
    .get('/progress')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('Hello'), 'Progress route is valid');
      t.end();
    });
});


test('Test getUserChallenges function in progress route', (t) => {
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return getUserChallenges(2);
    })
    .then((challenges) => {
      console.log(challenges);
      t.ok(challenges[1].title.includes('Morning'), 'Morning Hydration', 'getUserChallenges function is valid');
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
