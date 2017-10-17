//db.js
var mongoose = require('mongoose');
require('env2')('hidden.env'); // loads all entries into process.env
mongoose.connect('mongodb://' + process.env.DB_USER + ':' + process.env.DB_PW + '@cluster0-shard-00-00-gopoc.mongodb.net:27017,cluster0-shard-00-01-gopoc.mongodb.net:27017,cluster0-shard-00-02-gopoc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');