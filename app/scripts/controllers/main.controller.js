'use strict';

angular.module('turingScratch').controller('MainController',['$scope',function($scope){

  $scope.test = "HELLO WORLD";
  $scope.messages = [];
  $scope.$root.$on('$messageIncoming', function (event, data){
    $scope.messages.push(angular.fromJson(data));
  });
  $scope.sendMessage = function (){
    $scope.$emit(
      '$messageOutgoing',
      angular.toJson({"response":"hi"})
    );
  };

}]);