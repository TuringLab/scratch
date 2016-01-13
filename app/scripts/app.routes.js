'use strict';

angular.module('turingScratch').config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/:provider/:language?',{
            templateUrl : 'views/main.html',
            controller: 'MainController'
        })
        .otherwise({redirectTo : '/TuringLab'})
}]);