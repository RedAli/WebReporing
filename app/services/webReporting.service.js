'use strict';

angular.module('webReportingProject').factory('webReportingService', ['$http', 

    function($http) {

        var apiKey = "8731f8768a115cb349f607a0007f4ba544d348e3";

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
            }
        };
        
    }
]);