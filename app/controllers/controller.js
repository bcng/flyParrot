'use strict';
var io = require('socket.io').listen(3002);

var arDrone = require('ar-drone');
var client  = arDrone.createClient();

io.on('connection', function(socket) {
	socket.on('event', function(data) {
		console.log(data);
		switch (data.name) {
			case 'takeoff':
				console.log('Client asked Ar Drone to Take Off');
				client.takeoff();
				break;
			case 'spin':
				console.log('Client asked Ar Drone to start Spinning');
				client.clockwise(1);
				break;
			case 'stop':
				console.log('Client asked Ar Drone to Stay and Hover');
				client.stop();
				break;
			case 'land':
				console.log('Client asked Ar Drone to Land');
				client.land();
		}
	});
});