var app = angular.module('flyParrot', ['ngRoute']);

app.config(function($routeProvider) {

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

});
