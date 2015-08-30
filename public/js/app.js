var app = angular.module('flyParrot', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {

    $routeProvider

    .when('/', {
        templateUrl: "./views/home.html",
        controller: "homeCtrl"
    })

    .when('/team', {
        templateUrl: "./views/team.html",
        controller: "teamCtrl"
    })

    .when('/controller', {
        templateUrl: "./views/controller.html",
        controller: "controllerCtrl"
    })

    .when('/profile', {
        templateUrl: "./views/profile.html",
        controller: "profileCtrl"
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