'use strict';

angular.module('turingScratch').config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/:provider?',{
            templateUrl : 'views/main.html',
            controller: 'MainController'
        })
        .otherwise({
            templateUrl : 'views/main.html',
            controller: 'MainController'
        });
}]);