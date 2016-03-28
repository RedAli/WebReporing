angular.module('webReportingProject').config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'app/templates/accueil.template.html',
                controller:  'accueilCtrl'
            }).
            
            when('/informations', {
                templateUrl: 'app/templates/informations.template.html',
                controller:  'informationsCtrl'
            }).
            when('/tableau', {
                templateUrl: 'app/templates/tableau.template.html',
                controller:  'tableauCtrl'
            }).
            when('/carte', {
                templateUrl: 'app/templates/carte.template.html',
                controller:  'carteCtrl'
            }).
            when('/analyse', {
                templateUrl: 'app/templates/analyse.template.html',
                controller:  'analyseCtrl'
            }).
             when('/creer-graphe', {
                templateUrl: 'app/templates/creerGraphe.template.html',
                controller:  'creerGrapheCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }
]);