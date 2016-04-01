'use strict';

angular.module('creerGrapheModule',[]).controller('creerGrapheCtrl', 
	['$scope', '$filter', 'NgTableParams','$mdSidenav','webReportingService',
    function($scope, $filter, NgTableParams, $mdSidenav,webReportingService) {

    	$scope.titre ="Créer un Graphe";

    	$scope.chartTypes = [
		    {"id": "line", "title": "Line"},
		    {"id": "spline", "title": "Smooth line"},
		    {"id": "area", "title": "Area"},
		    {"id": "areaspline", "title": "Smooth area"},
		    {"id": "column", "title": "Column"},
		    {"id": "bar", "title": "Bar"},
		    {"id": "pie", "title": "Pie"},
		    {"id": "scatter", "title": "Scatter"}
	  	];
	  	$scope.chartTypeSelected ="";

	  	$scope.chartSeries = [
	  		{
	  			"name":"Vélib Paris Status",
	  			"type": "Paris",
	  			"key": "status"
	  		},
	  		{
	  			"name":"Vélib Paris Bonus",
	  			"type": "Paris",
	  			"key": "bonus"
	  		},
	  	];
	  	$scope.chartSerieSelected ="";

	  	$scope.chartTitleSelected = "";

	  	$scope.creerGraphique = function(){
	  		
	  		webReportingService.getVelibDataByVille($scope.chartSerieSelected.type, function(stations){
	  			if($scope.chartSerieSelected.key === "status"){
		  			Object.defineProperty($scope, 'dataSeriesStatus', {
		  				configurable: true,
	                    get: function(){
	                        var list = {};
	                        stations.forEach(function (item) {
	                            var arrond = item.address.match(/\b\d{5}\b/g)[0];
	                            if (list[arrond] === undefined) {
	                                list[arrond] = 1;
	                                if(item.status === "OPEN"){
	                                	list['open'+arrond] = 1;
	                                	list['close'+arrond] = 0;
	                                }
	                                else{
	                                	list['close'+arrond] = 1;
	                                	list['open'+arrond] = 0;
	                                }
	                            } else {
	                                list[arrond] += 1;
	                                if(item.status === "OPEN"){
	                                	list['open'+arrond] += 1;
	                                }
	                                else{
	                                	list['close'+arrond] += 1;
	                                }
	                            }
	                        });          
	                        var newItems = [];    
	                        Object.keys(list).forEach(function(key){
	                            if(key.length == 5){  
	                                newItems.push({  
	                                    name : key,
	                                    data: [list['open'+key],list['close'+key]]
	                                });
	                            }
	                        });
	                        return newItems;                            
	                    }
	                });
					$scope.creerChart = {
				    	options: {
					      	chart: {
					        	type: $scope.chartTypeSelected.id
					      	},
					      	plotOptions: {
					        	series: {
					          		stacking: ''
					        	}
					      	}
					    },
					    xAxis: {
                            categories: ['Station OPEN', 'Station CLOSE',],
                            title: {
                                text: null
                            }
                        },
				    	series: $scope.dataSeriesStatus,
			    		title: {
			      			text: $scope.chartTitleSelected
			    		},
			    		credits: {
			      			enabled: true
			    		},
			    		loading: false,
						size: {}
				  	};

				}
				else if($scope.chartSerieSelected.key == "bonus"){
		  			Object.defineProperty($scope, 'dataSeriesBonus', {
		  				configurable: true,
	                    get: function(){
	                        var list = {};
	                        stations.forEach(function (item) {
	                            var arrond = item.address.match(/\b\d{5}\b/g)[0];
	                             if (list[arrond] === undefined) {
	                                list[arrond] = 1;
	                                if(item.bonus){
	                                	list['true'+arrond] = 1;
	                                	list['false'+arrond] = 0;
	                                }
	                                else{
	                                	list['false'+arrond] = 1;
	                                	list['true'+arrond] = 0;
	                                }
	                            } else {
	                                list[arrond] += 1;
	                                if(item.status){
	                                	list['true'+arrond] += 1;
	                                }
	                                else{
	                                	list['false'+arrond] += 1;
	                                }
	                            }
	                        });          
	                        var newItems = [];    
	                        Object.keys(list).forEach(function(key){
	                            if(key.length == 5){  
	                                newItems.push({  
	                                    name : key,
	                                    data: [list['true'+key],list['false'+key]]
	                                });
	                            }
	                        });
	                        return newItems;                            
	                    }
	                });
					$scope.creerChart = {
				    	options: {
					      	chart: {
					        	type: $scope.chartTypeSelected.id
					      	},
					      	plotOptions: {
					        	series: {
					          		stacking: ''
					        	}
					      	}
					    },
					    xAxis: {
                            categories: ['Bonus TRUE', 'Bonus FALSE',],
                            title: {
                                text: null
                            }
                        },
				    	series: $scope.dataSeriesBonus,
			    		title: {
			      			text: $scope.chartTitleSelected
			    		},
			    		credits: {
			      			enabled: true
			    		},
			    		loading: false,
						size: {}
				  	};

				}
	  		});
	  		

	  	};
    	
    }
]);