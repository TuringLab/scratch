'use strict';

angular.module('turingScratch').config(['$routeProvider',function($routeProvider){
    $routeProvider
        .otherwise({
            templateUrl : 'views/main.html',
            controller: 'MainController'
        });
}]);