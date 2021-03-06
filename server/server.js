require('babel-register');
require('babel-polyfill');
const express = require('express');
var app = express();

const variables = require('./config/variables.express');

// setup db connection
require('./config/mongoose.connection');
// setup app with middleware
require('./config/config.express')(app);
// setup app with route end points
require('./config/routes.express')(app);

const PORT = process.env.PORT || variables.EXPRESS_PORT;

// application server
console.log('process.env.PORT: ', process.env.PORT);

app.listen(PORT, function() {
  console.log(variables.EXPRESS_LISTEN_MESSAGE + variables.EXPRESS_PORT);
});

exports.app = app;