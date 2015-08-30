(function() {

   'use strict';

   var authCtrl = function($scope, $location, authService) {

        $scope.register = function() {
            if ($scope.details.password !== $scope.password) {
                $scope.error = 'Please make sure your passwords match!';
            } else {
                authService.register($scope.details).then(function(newUser) {
                    console.log('New User: ', newUser);
                    authService.login($scope.details).then(function() {
                        $scope.details = {};
                        $scope.password = '';
                        $location.path('/controller');                
                    }, function(err) {
                        $scope.error = err.message;
                    });
                }, function(err) {
                    $scope.error = err.message;
              });
            }
        };

        $scope.login = function() {
            authService.login($scope.details).then(function() {
                $scope.details = {};
                $location.path('/controller');
            }, function(err) {
                $scope.error = err.message;
          });
        };       

   };

   authCtrl.$inject = ['$scope', '$location', 'authService'];

   app.controller('authCtrl', authCtrl);

}());