// app.js
var express = require('express');
var app = express();
var db = require('./db');

var user_controller = require('./user/user_controller');
app.use('/users', user_controller);

module.exports = app;

