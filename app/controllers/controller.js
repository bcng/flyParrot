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

			//drone vertical movement
			case 'up':
				console.log('Client asked Ar Drone to Move Up');
				client.up(1);
				break;
			
			case 'down':
				console.log('Client asked Ar Drone to Move Down');
				client.down(1);
				break;
			
			case 'clockwise':
				console.log('Client asked Ar Drone to start Spinning Clockwise');
				client.clockwise(1);
				break;

			case 'counterClockwise':
				console.log('Client asked Ar Drone to start Spinning Counter Clockwise');
				client.counterClockwise(1);	

			//drone horizontal movement	
			case 'front':
				console.log('Client asked Ar Drone to Move Forward');
				client.front(1);
				break;
			
			case 'back':
				console.log('Client asked Ar Drone to Move Backward');
				client.back(1);
				break;
			
			case 'left':
				console.log('Client asked Ar Drone to Move Left');
				client.left(1);
				break;

			case 'right':
				console.log('Client asked Ar Drone to Move Right');
				client.right(1);		

		}
	});
});