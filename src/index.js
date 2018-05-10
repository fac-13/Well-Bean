const app = require('./app');

const port = app.get('port');

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`); //eslint-disable-line
});
