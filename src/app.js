const express = require('express');

// require controllers
const controllers = require('./controllers');

const app = express();

// set up server
app.use(controllers);

app.set('port', process.env.PORT || 3000);

module.exports = app;
