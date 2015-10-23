'use strict';

angular.module('turingScratch').controller('MainController',['$scope','$sce','config',function($scope,$sce,config){

	var show = true;

  $scope.cards = {
  	url : $sce.trustAsResourceUrl(config.cardsUrl),
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
  	url: $sce.trustAsResourceUrl('https://scratch.mit.edu/projects/editor/'),
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