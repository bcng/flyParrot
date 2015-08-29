'use strict';

//#####################################################
//Dependencies:
//#####################################################
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//#####################################################
//Config files:
//#####################################################
var configDB = require('./app/config/database.js');

//#####################################################
//Controllers:
//#####################################################
var userCtrl = require('./app/controllers/userCtrl.js')
require("./app/controllers/controller");
require("./app/controllers/camera-feed");

//#####################################################
//Express:
//#####################################################
var app = express();
var server = require('http').createServer(app);  

//#####################################################
//Express Server Port:
//#####################################################
var port = process.argv[2] || 3000;

//#####################################################
//Middleware:
//#####################################################
app.use('/', bodyParser.json());
app.use('/', cors());

/* Middleware to render all of our public files. Any files of
the public folder will be renderd if you use them*/
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});



//#####################################################
//Routes:
//#####################################################
app.post('/api/user', userCtrl.create);
app.get('/api/user', userCtrl.read);
app.put('/api/user/:id', userCtrl.update);
app.delete('/api/user/:id', userCtrl.remove);

//#####################################################
//Starting server:
//#####################################################
server.listen(port, function(err) {
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