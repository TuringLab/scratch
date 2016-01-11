'use strict';

angular.module('turingScratch').controller('MainController',['$scope','$routeParams','$sce','config',function($scope,$routeParams,$sce,config){

	var show = true;
  console.log($routeParams);

  var cardsUrl = config.cardsUrl
  if ($routeParams.provider){
    cardsUrl += '#/projects?provider=';
    cardsUrl += $routeParams.provider;
  }
  console.log(cardsUrl);

  $scope.cards = {
  	url : $sce.trustAsResourceUrl(cardsUrl),
  	toggle : function(){
			show = !show;
		},
  	getClass : function(){
  		if (show){
  			return 'small';
  		} else {
  			return 'hidden';
  		}
  	}
  };

  $scope.scratch = {
  	url: $sce.trustAsResourceUrl('https://scratch.mit.edu/mystuff/'),
  	getClass: function(){
  		if (show){
  			return 'large';
  		} else {
  			return 'full';
  		}
  	}
  };

  $scope.button = {
  	getClass: function(){
  		if (show){
  			return 'fa-chevron-left'
  		} else {
  			return 'fa-chevron-right'
  		}
  	}
  }

  $scope.$root.$on('$messageIncoming', function (event, data){
    $scope.scratch.url = $sce.trustAsResourceUrl(data.scratchUrl);
    console.log($scope.scratchUrl);
  });

}]);