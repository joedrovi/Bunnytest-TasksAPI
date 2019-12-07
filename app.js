const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors');
var indexRouter = require('./server/routes/index'); 
// Set up the express app
const app = express();
app.use(cors())

// Log requests to the console.
app.use(logger('dev')); 
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./server/routes')(app);
// Setup a default catch-all route that sends back a welcome message in JSON format.

module.exports = app;