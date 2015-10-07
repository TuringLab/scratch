'use strict';

angular.module('turingScratch').controller('MainController',['$scope','$sce','config',function($scope,$sce,config){

  $scope.cardsUrl = $sce.trustAsResourceUrl(config.cardsUrl);
  $scope.scratchUrl = $sce.trustAsResourceUrl('https://scratch.mit.edu/projects/editor/');

  $scope.$root.$on('$messageIncoming', function (event, data){
    $scope.scratchUrl = $sce.trustAsResourceUrl(data.scratchUrl);
    console.log($scope.scratchUrl);
  });


}]);