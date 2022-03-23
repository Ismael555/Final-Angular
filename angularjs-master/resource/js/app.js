angular.module("FinalApp",["lumx","ngRoute"])
.configure(function($routeProvider){
    $routeProvider
    .when("/",{
        controller:"MainController",
        templateUrl:"templates/home.html"
    })
});