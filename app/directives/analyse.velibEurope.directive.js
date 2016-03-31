'use strict';

angular.module('analyseModule').directive('analysevelibeurope', 
    function(){
        return {
            restrict: 'E',
            templateUrl: 'app/templates/analyse.velibEurope.template.html',
            controller: function($scope,webReportingService){
               
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
                                    y: list[key]
                                });    
                            });
                            return newItems;
                        }
                    });

                    $scope.chartNombreVelibEurope = {
                        options: {
                            chart: {
                                plotBackgroundColor: null,
                                plotBorderWidth: null,
                                plotShadow: false,
                                type: 'pie'
                            },
                             
                            plotOptions: {
                                pie: {
                                    allowPointSelect: true,
                                    cursor: 'pointer',
                                    dataLabels: {
                                        enabled: false
                                    },
                                    showInLegend: true
                                }
                            },

                            tooltip: {
                                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                            },
                        },
                        series: [{
                            name: 'Stations',
                            colorByPoint: true,
                            data:$scope.villes,
                        }],
                        title: {
                            text: 'Nombre totale de station de Vélib par Ville'
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