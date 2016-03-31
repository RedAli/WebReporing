'use strict';

angular.module('carteModule').directive('cartevelibmaposition', 
    function(){
        return {
            restrict: 'E',
            templateUrl: 'app/templates/carte.velibMaPosition.template.html',
            controller: function($scope,webReportingService, leafletData){
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
                    
                    controls: {
                        custom: new L.Control.Locate({
                            follow: true,
                            strings: {
                                title: "Ma position",
                                metersUnit: "métres", // string for metric units
                                popup: "Vous êtes dans un  rayon de {distance} {unit}",  // text to appear if user clicks on circle
                            },
                            locateOptions: {
                                setView: true
                            }
                        })
                    }
                });
                
                $scope.getVelibAutourDeMoi = function(lat,lng){

                    webReportingService.getVelibDataByVilleAndDistance("Paris",lat, lng, 200, function(data){
                        angular.forEach(data, function(station){
                            $scope.markers[station.fields.number] =
                            {
                                lat: station.fields.position[0],
                                lng: station.fields.position[1],
                                message: '<h3><i class="material-icons">directions_bike</i> '+station.fields.available_bikes+'<hr><i class="material-icons">local_parking</i> '+station.fields.available_bike_stands+'</h3>',
                                focus: false,
                                draggable: false
                            } 
                        });  
                    });
                }
                
            }
        };
    }
);