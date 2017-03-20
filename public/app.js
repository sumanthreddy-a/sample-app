var app=angular.module("loginApp",["ngRoute"])
app.config(function($routeProvider){
     $routeProvider
    .when("/", {
        templateUrl : "views/login.html",
        controller:"loginCtrl"
    })
    .when("/register", {
        templateUrl : "views/register.html",
        controller:"loginCtrl"
    })
    .when("/home", {
        templateUrl : "views/home.html",
        controller:"loginCtrl"
    })
})