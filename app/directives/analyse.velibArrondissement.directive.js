'use strict';

angular.module('analyseModule').directive('analysevelibarrondissement', 
    function(){
        return {
            restrict: 'E',
            templateUrl: 'app/templates/analyse.velibArrondissement.template.html',
            controller: function($scope,webReportingService){
               
               webReportingService.getVelibDataByVille("Paris",function(stations){
                    Object.defineProperty($scope, 'arrondissement', {
                        get: function(){
                            var list = {};
                            stations.forEach(function (item) {
                                var arrond = item.address.match(/\b\d{5}\b/g)[0];
                                if (list[arrond] === undefined) {
                                    list[arrond] = 1;
                                    list['place'+arrond] = item.available_bike_stands;
                                    list['velib'+arrond] = item.available_bikes;
                                } else {
                                    list[arrond] += 1;
                                    list['place'+arrond] += item.available_bike_stands;
                                    list['velib'+arrond] += item.available_bikes;
                                }
                            });          
                            var newItems = [];    
                            Object.keys(list).forEach(function(key){
                                if(key.length == 5){  
                                    newItems.push({  
                                        name : key,
                                        total: list[key],
                                        place: list['place'+key],
                                        velib: list['velib'+key]
                                    });
                                }
                            });
                            return newItems;                            
                        }
                    });
                    $scope.selectedItem = "";
                    $scope.querySearch = function (query) {
                        var results = query ? $scope.arrondissement.filter( createFilterFor(query) ) : $scope.arrondissement,
                              deferred;
                        return results;
                        
                    };
                    function createFilterFor(query) {
                        var lowercaseQuery = angular.lowercase(query);
                        return function filterFn(arrond) {
                            return (arrond.name.indexOf(lowercaseQuery) != -1);
                        };
                    }
                    $scope.createChartVelibArrondissement = function(){
                        console.log($scope.selectedItem);
                        $scope.chartNombreVelibArrondissement = {
                            options: {
                                chart: {
                                    type: 'bar'
                                },
                                 
                                plotOptions: {
                                    bar: {
                                        dataLabels: {
                                            enabled: true
                                        }
                                    }
                                },

                                tooltip: {
                                    valueSuffix: '  Disponible'
                                }
                            },
                            xAxis: {
                                categories: ['Vélib Disponible', 'Place Disponible',],
                                title: {
                                    text: null
                                }
                            },
                            legend: {
                                layout: 'vertical',
                                align: 'right',
                                verticalAlign: 'top',
                                x: -40,
                                y: 80,
                                floating: true,
                                borderWidth: 1,
                                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                                shadow: true
                            },
                            series: [
                                {
                                    name: 'Vélib',
                                    data: [$scope.selectedItem.velib, $scope.selectedItem.place]
                                }
                            ],
                            title: {
                                text: 'Nombre de Vélib et Places disponibles dans l\'arrondissement '+$scope.selectedItem.name+' sur '+$scope.selectedItem.total+' stations'
                            },
                            credits: {
                                enabled: true
                            },
                            loading: false,
                            useHighStocks: false,
                            size: {}
                        };
                    };

                });
            
            }
        };
    }
);