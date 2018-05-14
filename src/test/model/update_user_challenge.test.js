const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
// require test database build script
const runDbBuild = require('../../model/database/db_build');
// require query functions
const { updateUserChallenge } = require('../../model/queries/');

test('Test updateUserChalleng query with status complete', (t) => {
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return updateUserChallenge(1, 'complete');
    })
    .then((UserChallenge) => {
      t.deepEqual(
        UserChallenge[0],
        { id: '1', status: 'complete' },
        'updateUserChallenge returns the correct status',
      );
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test updateUserChallenge query with status abandon', (t) => {
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return updateUserChallenge(1, 'abandon');
    })
    .then((UserChallenge) => {
      t.deepEqual(
        UserChallenge[0],
        { id: '1', status: 'abandon' },
        'updateUserChallenge returns the correct status',
      );
      t.end();
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test updateUserChallenge query with invalid status', (t) => {
  runDbBuild()
    .then((res) => {
      t.ok(res);
      return updateUserChallenge(1, 'elephant');
    })
    .then((UserChallenge) => {
      t.notOk(UserChallenge);
      t.end();
    })
    .catch((e) => {
      t.ok(e);
      t.end();
    });
});
