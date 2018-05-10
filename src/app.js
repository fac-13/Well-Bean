const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// require controllers
const controllers = require('./controllers');

const app = express();

// set up views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  }),
);

// set up server
app.use(controllers);
app.set('port', process.env.PORT || 3000);

module.exports = app;
