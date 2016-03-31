'use strict';

angular.module('carteModule').directive('cartevelibeurope', 
    function(){
        return {
            restrict: 'E',
            templateUrl: 'app/templates/carte.velibEurope.template.html',
            controller: function($scope,webReportingService){
                angular.extend($scope, {
                    center: {
                        lat: 46.333, 
                        lng: 12.011,
                        zoom: 4
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
                            }
                        })
                    }
                });


                webReportingService.getVelibData(function(stations){

                    Object.defineProperty($scope, 'villes', {
                        get: function(){
                            var list = {};
                            stations.forEach(function (item) {
                                item.contract_name = item.contract_name.replace("-", " ");
                                if (list[item.contract_name] === undefined) {
                                     list[item.contract_name] = 1;
                                     list['lat'+item.contract_name] = item.position.lat;
                                     list['lng'+item.contract_name] = item.position.lng;
                                } else {
                                   list[item.contract_name] += 1;
                                }
                            });          
                            var newItems = [];    
                            Object.keys(list).forEach(function(key){      
                              newItems.push({  
                                 name : key,
                                 data : list[key],
                                 lat  : list["lat"+key],
                                 lng  : list["lng"+key]
                              });    
                            });
                            return newItems;
                        }
                    });



                    angular.forEach($scope.villes, function(ville){
                        $scope.markers[ville.name] =
                        {
                            lat: ville.lat,
                            lng: ville.lng,
                            message: '<h3><i class="material-icons">location_on</i> '+ville.name+'<hr><i class="material-icons">directions_bike</i> '+ville.data+'</h3>',
                            focus: false,
                            draggable: false
                        } 
                    }); 


                });


               
    

            }
        };
    }
);