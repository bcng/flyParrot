(function() {
    var controllerCtrl = function($scope) {
		
		var socket = io.connect('http://localhost:3002');
			socket.on('connect', function() {
				console.log('Connection successful');
			});

			$scope.takeoff = function() {
				console.log('Asking server to send takeoff command to Ar Drone');
				socket.emit('event', {name: 'takeoff'});
			};

			$scope.spin = function() {
				console.log('Asking server to send spin command to Ar Drone');
				socket.emit('event', {name: 'spin'});
			};

			$scope.stop = function() {
				console.log('Asking server to send stop command to Ar Drone');
				socket.emit('event', {name: 'stop'});
			};

			$scope.land = function() {
				console.log('Asking server to send land command to Ar Drone');
				socket.emit('event', {name: 'land'});
			};

    };

    controllerCtrl.$inject = ['$scope'];

    app.controller('controllerCtrl', controllerCtrl);

}());
