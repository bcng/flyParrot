(function() {

    'use strict';

    var authService = function($http, $q, $location) {

        this.register = function(body) {
            return $http.post('/api/user/register', body).
            then(function(response) {
                //console.log(response);
                return response.data;
            }, function(err) {
                console.log('Error: ', err);
            });
        };

        this.login = function(body) {
            return $http.post('/api/user/login', body).
            then(function(response) {
                console.log(response);
                return response;
            }, function(err) {
                console.log('Error: ', err);
            });
        };
       
        this.loggedin = function() {
            var deferred = $q.defer();
            $http.get('/api/user/loggedin').
            then(function(user) {
                console.log('Loggedin: ', user);
                if (user.data !== '0') {
                    deferred.resolve(); //Authenticated 
                } else {
                    deferred.reject(); //Not Authenticated
                    $location.path('/');
                }
            }, function(err) {
                console.log('Error: ', err);
            });
            return deferred.promise;
        };

    };

    authService.$inject = ['$http', '$q', '$location'];

    app.service('authService', authService);

}());
