'use strict';

angular.module('analyseModule',[]).controller('analyseCtrl', 
	['$scope', '$filter', 'NgTableParams','$mdSidenav','webReportingService',
    function($scope, $filter, NgTableParams, $mdSidenav, webReportingService) {

    	$scope.titre ="Analyses";

	  	$scope.analyseVelibParisSelected = false;
        $scope.analyseVelibEuropeSelected = false;
	  	$scope.analyseVelibArrondissementSelected = false;

        $scope.selectAnalyseVelibParis = function(){
            $scope.analyseVelibParisSelected = true;
        };
    	
    	$scope.selectAnalyseVelibEurope = function(){
            $scope.analyseVelibEuropeSelected = true;
        };
    	
        $scope.selectAnalyseVelibArrondissement = function(){
            $scope.analyseVelibArrondissementSelected = true;
        };
        
    }
]);