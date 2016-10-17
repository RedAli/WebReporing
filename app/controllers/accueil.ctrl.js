'use strict';

angular.module('accueilModule',[]).controller('accueilCtrl', 
	['$scope', '$filter', 'NgTableParams','$mdSidenav',
    function($scope, $filter, NgTableParams, $mdSidenav) {

    	$scope.etudiants = [
    		{
    			photo: "/WebReporting/assets/img/ali.jpg",
    			nom: "Ali REDJAL"
    		}
    	];


        $scope.slides = [
            {
                image: '/WebReporting/assets/img/angularjs.png',
                id: 0
            },
            {
                image: '/WebReporting/assets/img/highcharts.png',
                id: 1
            },
            {
                 image: '/WebReporting/assets/img/leaflet.png',
                id: 2
            }
        ];
    	
    }
]);