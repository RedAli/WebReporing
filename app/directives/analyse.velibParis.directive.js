'use strict';

angular.module('analyseModule').directive('analysevelibparis', 
    function(){
        return {
            restrict: 'E',
            templateUrl: 'app/templates/analyse.velibParis.template.html',
            controller: function($scope,webReportingService){
               
               webReportingService.getVelibDataByVille("Paris",function(stations){
                    
                    Object.defineProperty($scope, 'arrondissement', {
                        get: function(){
                            var list = {};
                            stations.forEach(function (item) {
                                //var arrond = item.address.slice(-11,-6)
                                var arrond = item.address.match(/\b\d{5}\b/g)[0];
                                if (list[arrond] === undefined) {
                                     list[arrond] = 1;
                                } else {
                                   list[arrond] += 1;
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
                    
                    console.log($scope.categories);
                    $scope.chartNombreVelibParis = {
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
                                    return 'Arrondissement: <b>' + this.series.name + '</b><br>Nombre stations: <b>' + this.y + '</b>';
                                }
                            }
                        },
                        
                        series: $scope.arrondissement,
                        title: {
                            text: 'Nombre totale de station de Vélib par Arrondissement'
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
        };
    }
);