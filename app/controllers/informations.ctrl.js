'use strict';

angular.module('informationsModule',[]).controller('informationsCtrl', 
	['$scope', '$filter', 'NgTableParams','$mdSidenav',
    function($scope, $filter, NgTableParams, $mdSidenav) {

    	$scope.titre ="Informations";
    	
    }
]);