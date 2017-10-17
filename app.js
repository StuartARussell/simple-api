// app.js
var express = require('express');
var app = express();
var db = require('./db');

var user_controller = require('./user/user_controller');
app.use('/users', user_controller);


var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});


module.exports = app;

