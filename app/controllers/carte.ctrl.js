'use strict';

angular.module('carteModule',[]).controller('carteCtrl', 
	['$scope','webReportingService',
    function($scope,webReportingService) {

    	
    	$scope.titre ="Carte";
    	
    	angular.extend($scope, {
            center: {
                autoDiscover: true
            },
            markers: {
            	//lat: $scope.center.lat,
            	//lng: $scope.center.lng
            },

            defaults: {
                scrollWheelZoom: false
            },
            paths: {
            	c2: {
                    weight: 2,
                    color: '#ff612f',
                    latlngs:[48.85522160000001,2.3315281] ,
                    radius: 100,
                    type: 'circle'
                }
            }
        });

        
		webReportingService.getVelibDataByVille("amiens", function(data){
			angular.forEach(data, function(station){
				$scope.markers[station.number] =
				{
					lat: station.position.lat,
		            lng: station.position.lng,
		            message: 'Vélibs Disponible: '+station.available_bikes+' <br> Places Disponible: '+station.available_bike_stands,
		            focus: false,
		            draggable: false
				}
			}); 
		});
		  
    }
]);