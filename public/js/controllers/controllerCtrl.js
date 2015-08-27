(function() {
    var controllerCtrl = function($scope) {
		
		var socket = io.connect('http://localhost:3002');
			socket.on('connect', function() {
				console.log('Connection successful');
			});

			//drone commands
			$scope.takeoff = function() {
				console.log('Asking server to send takeoff command to Ar Drone');
				socket.emit('event', {name: 'takeoff'});
			};

			$scope.land = function() {
				console.log('Asking server to send land command to Ar Drone');
				socket.emit('event', {name: 'land'});
			};

			$scope.stop = function() {
				console.log('Asking server to send stop command to Ar Drone');
				socket.emit('event', {name: 'stop'});
			};

			//drone vertical movement
			$scope.up = function() {
				console.log('Asking server to send up command to Ar Drone');
				socket.emit('event', {name: 'up'});
			};

			$scope.down = function() {
				console.log('Asking server to send down command to Ar Drone');
				socket.emit('event', {name: 'down'});
			};

			$scope.clockwise = function() {
				console.log('Asking server to send clockwise command to Ar Drone');
				socket.emit('event', {name: 'clockwise'});
			};

			$scope.counterClockwise = function() {
				console.log('Asking server to send counterClockwise command to Ar Drone');
				socket.emit('event', {name: 'counterClockwise'});
			};

			//drone horizontal movement
			$scope.front = function() {
				console.log('Asking server to send front command to Ar Drone');
				socket.emit('event', {name: 'front'});
			};

			$scope.back = function() {
				console.log('Asking server to send back command to Ar Drone');
				socket.emit('event', {name: 'back'});
			};

			$scope.left = function() {
				console.log('Asking server to send left command to Ar Drone');
				socket.emit('event', {name: 'left'});
			};

			$scope.right = function() {
				console.log('Asking server to send right command to Ar Drone');
				socket.emit('event', {name: 'right'});
			};

    };

    controllerCtrl.$inject = ['$scope'];

    app.controller('controllerCtrl', controllerCtrl);

}());
