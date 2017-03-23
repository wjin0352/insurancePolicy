const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const morgan = require('morgan');
const path = require('path');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../../webpack.config');

module.exports = function(app) {
  app.use(webpackMiddleware(webpack(webpackConfig)));
  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('dev')); // console logs all the requests
}
