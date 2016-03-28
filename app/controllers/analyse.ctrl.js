'use strict';

angular.module('analyseModule',[]).controller('analyseCtrl', 
	['$scope', '$filter', 'NgTableParams','$mdSidenav','webReportingService',
    function($scope, $filter, NgTableParams, $mdSidenav, webReportingService) {

    	$scope.titre ="Analyses";
    	

	  	webReportingService.getVelibData(function(stations){
			
			Object.defineProperty($scope, 'villes', {
		        get: function(){
		            var list = {};
		            stations.forEach(function (item) {
		                if (list[item.contract_name] === undefined) {
		                     list[item.contract_name] = 1;
		                } else {
		                   list[item.contract_name] += 1;
		                }
		            });          
		            var newItems = [];    
		            Object.keys(list).forEach(function(key){      
		              newItems.push({  
		                 name :key,
		                 data: [list[key]]
		              });    
		            });
		            return newItems;
		        }
		    });

	  		$scope.chartNombreVelibEurope = {
		    	options: {
			      	chart: {
			        	type: 'column'
			      	},
			      	 
			      	plotOptions: {
			        	series: {
			          		stacking: ''
			        	}
			      	},

			      	tooltip: {
					    formatter: function() {
					        return 'Ville: <b>' + this.series.name + '</b><br>Nombre stations: <b>' + this.y + '</b>';
					    }
					}
			    },
		    	series: $scope.villes,
	    		title: {
	      			text: 'Nombre totale de station de Vélo par Ville'
	    		},
	    		credits: {
	      			enabled: true
	    		},
	    		loading: false,
	    		useHighStocks: false,
				size: {}
		  	}

	  	});
    	
    }
]);