'use strict';
//open drone socket connection
var io = require('socket.io').listen(3002);

io.on('connection', function(socket) {
	//instantiate drone client
	var arDrone = require('ar-drone');
	var client  = arDrone.createClient();

	//get battery level every 2 seconds
	setInterval(function() {
        var batteryLevel = client.battery();
        socket.emit('event', {
            name: 'battery',
            value: batteryLevel
        });
    }, 2000);

	socket.on('event', function(data) {
		console.log(data);
		switch (data.name) {
			
			//drone commands
			case 'takeoff':
				console.log('Client asked Ar Drone to Take Off');
				client.takeoff();
				break;
			case 'land':
				console.log('Client asked Ar Drone to Land');
				client.land();
				break;
			case 'stop':
				console.log('Client asked Ar Drone to Stay and Hover');
				client.stop();
				break;
			case 'ftrim':
				console.log('Client asked Ar Drone to Flat Trim');
				client.ftrim();
				break;

			//drone vertical movement
			case 'up':
				console.log('Client asked Ar Drone to Move Up');
				console.log(data.speed);
				client.up(data.speed);
				break;
			
			case 'down':
				console.log('Client asked Ar Drone to Move Down');
				client.down(0.1);
				break;
			
			case 'clockwise':
				console.log('Client asked Ar Drone to start Spinning Clockwise');
				client.clockwise(0.1);
				break;

			case 'counterClockwise':
				console.log('Client asked Ar Drone to start Spinning Counter Clockwise');
				client.counterClockwise(0.1);	

			//drone horizontal movement	
			case 'front':
				console.log('Client asked Ar Drone to Move Forward');
				client.front(0.1);
				break;
			
			case 'back':
				console.log('Client asked Ar Drone to Move Backward');
				client.back(0.1);
				break;
			
			case 'left':
				console.log('Client asked Ar Drone to Move Left');
				client.left(0.1);
				break;

			case 'right':
				console.log('Client asked Ar Drone to Move Right');
				client.right(0.1);		

		}
	});
});