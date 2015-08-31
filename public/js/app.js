var app = angular.module('flyParrot', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {

    $routeProvider

    .when('/', {
        templateUrl: "./views/home.html",
        controller: "homeCtrl"
    })

    .when('/about', {
        templateUrl: "./views/about.html",
        controller: "aboutCtrl"
    })

    .when('/controller', {
        templateUrl: "./views/controller.html",
        controller: "controllerCtrl",
        resolve: {
            loggedin: function(authService) {
                authService.loggedin();
            }
        }
    })

    .when('/profile', {
        templateUrl: "./views/profile.html",
        controller: "profileCtrl",
        resolve: {
            loggedin: function(authService) {
                authService.loggedin();
            }
        }
    })

    .otherwise({
        redirectTo: '/'
    });

    $httpProvider.interceptors.push(function($q, $location) {
        return {
            response: function(response) {
                //Do something on success
                return response;
            },
            responseError: function(response) {
                if (response.status === 401) {
                    $location.path('/');
                }
                return $q.reject(response);
            }
        };
    });

});
