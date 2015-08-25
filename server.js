'use strict';

//#####################################################
//Dependencies:
//#####################################################
var express = require('express');
var mongoose = require('mongoose');
var arDrone = require('ar-drone');

//#####################################################
//Config files:
//#####################################################
var configDB = require('./app/config/database.js');


//#####################################################
//Controllers:
//#####################################################


//#####################################################
//Express:
//#####################################################
var app = express();

//#####################################################
//Drone:
//#####################################################
var client = arDrone.createClient();

//#####################################################
//Express Server Port:
//#####################################################
var port = process.argv[2] || 3000;


//#####################################################
//Middleware:
//#####################################################

/* Middleware to render all of our public files. Any files of
the public folder will be renderd if you use them*/
app.use(express.static(__dirname + '/public'));

//#####################################################
//Routes:
//#####################################################


//#####################################################
//Starting server:
//#####################################################
app.listen(port, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('Listening on port: ' + port);
	}
});

//#####################################################
//Connection to database:
//#####################################################
mongoose.connect(configDB.uri, function(err) {
	if (err) {
		console.log('Connection to MongoDB failed');
	} else {
		console.log('Connected to MongoDB at: ', configDB.uri);
	}
}); 