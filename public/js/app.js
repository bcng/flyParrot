var app = angular.module('flyParrot', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: "./views/home.html",
        controller: "homeCtrl"
    })

    .when('/controller', {
        templateUrl: "./views/controller.html",
        controller: "controllerCtrl"
    })

    .when('/pictures', {
        templateUrl: "./views/picture.html",
        controller: "pictureCtrl"
    })

    .otherwise({
        redirectTo: '/'
    });

});
