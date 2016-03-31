'use strict';

angular.module('webReportingProject').factory('webReportingService', ['$http', 

    function($http) {

        var apiKey = "8731f8768a115cb349f607a0007f4ba544d348e3";
        var api_url = 'https://opendata.paris.fr/api/records/1.0/search/?apiKey='+apiKey+'dataset=stations-velib-disponibilites-en-temps-reel';

        return {
            getVelibDataByVille: function(ville, callback) {
               $http({
                    method: 'GET',
                    url: 'https://api.jcdecaux.com/vls/v1/stations?&contract='+ville+'&apiKey='+apiKey
                }).                
                success(function(data, status) {
                    callback(data, status);
                }).
                error(function(error, status) {
                    callback(error, status);
                });
            },
            getVelibData: function(callback) {
               $http({
                    method: 'GET',
                    url: 'https://api.jcdecaux.com/vls/v1/stations?&contracts&apiKey='+apiKey

                }).                
                success(function(data, status) {
                    callback(data, status);
                }).
                error(function(error, status) {
                    callback(error, status);
                });
            },
            getVelibDataByVilleAndDistance: function(ville, x, y, d, callback) {
               $http({
                    method: 'GET',
                    url: api_url+'&rows=10000&refine.contract_name='+ville+'&geofilter.distance='+x+','+y+','+d
                }).                
                success(function(data, status) {
                    callback(data.records, status);
                }).
                error(function(error, status) {
                    callback(error, status);
                });
            },
        };
        
    }
]);