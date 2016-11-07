// set up
var express = require('express'); //variable express says it requires express to run
var app = express();
var mongoose = require('mongoose'); //variable mongoose says it requires mongoose to run
var port = process.env.PORT || 8080;
var database = require('./config/database');

//configuration
mongoose.connect(database.localUrl); //est. connection between app and mongle.db

//listen (start app with node.js)
app.listen(port);
console.log("App listening on port " + port);

//routes
require('./routes.js')(app);
