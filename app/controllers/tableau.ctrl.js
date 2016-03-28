'use strict';

angular.module('tableauModule',[]).controller('tableauCtrl', 
	['$scope', '$filter', 'NgTableParams','$mdSidenav','webReportingService',
    function($scope, $filter, NgTableParams, $mdSidenav, webReportingService) {

    	$scope.tableParams = new NgTableParams({},{});
    	$scope.tableParams.reload();
    	
		$scope.tableParams = new NgTableParams(
    		{
		        page: 1,            
		        count: 5,
		        sorting: { contract_name: "asc" }
		    },
		    {	
		    	getData: function($defer, params) {
		    		webReportingService.getVelibData(function(data){
			            var filteredData = params.filter() ? $filter('filter')(data,  params.filter()) : data;
				        var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : filteredData; 
				        params.total(orderedData.length);
				        $defer.resolve($scope.data = orderedData.slice((params.page() -1) * params.count(), params.page() * params.count()));           
		        	});
		        }
		    }
	    );
    	

    }
]);