<!DOCTYPE html>
<html lang="fr" ng-app="webReportingProject">
    <head>
        <meta charset="utf-8" />
        <title>Web Reporting</title>        
        <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon">
        <link rel="icon" href="/favicon.ico" type="image/x-icon">
        <base href="/">


        <!--JS-->
        <script src="assets/libs/jquery.min.js"></script>
        <script src="assets/libs/angular.js"></script>
        <script src="assets/libs/highstock.src.js"></script>
        <script src="assets/libs/highcharts-ng.js"></script>

        <script src="assets/libs/leaflet.js"></script>
        
        <script src="assets/libs/angular-material.min.js"></script>
        <script src="assets/libs/angular-messages.min.js"></script>
        <script src="assets/libs/angular-animate.min.js"></script>
        <script src="assets/libs/angular-aria.min.js"></script>
        <script src="assets/libs/angular-route.js"></script>
        <script src="assets/libs/ng-table.min.js"></script>
        <script src="assets/libs/ui-bootstrap.min.js"></script>
        <script src="assets/libs/angular-leaflet-directive.min.js"></script>
        <script src="assets/libs/ui-bootstrap-tpls-1.2.5.js"></script>
        <script src="assets/libs/L.Control.Locate.min.js"></script>


        <!--CSS-->
        <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="assets/css/angular-material.min.css">
        <link rel="stylesheet" type="text/css" href="assets/css/ng-table.min.css">
        <link rel="stylesheet" type="text/css" href="assets/css/main.css">
        <link rel="stylesheet" type="text/css" href="assets/css/leaflet.css">

        <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="assets/css/material-icons.css">

        
        
        
    </head>
    <body>



        <!--NAVBAR-->
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">
                        <span><img src="/WebReporting/assets/img/logo.png"> </span> Web Reporting 
                    </a>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="/">
                            <span class="glyphicon glyphicon-home"></span> Accueil
                        </a>
                    </li>
                    <li>
                        <a href="/informations">
                            <span class="glyphicon glyphicon-info-sign"></span> Informations
                        </a>
                    </li>
                    <li>
                        <a href="/tableau">
                            <span class="glyphicon glyphicon-th"></span> Tableau
                        </a>
                    </li>
                    <li>
                        <a href="/carte">
                            <span class="glyphicon glyphicon-globe"></span> Carte
                        </a>
                    </li>
                    <li>
                        <a href="/analyse">
                            <span class="glyphicon glyphicon-stats"></span> Analyses
                        </a>
                    </li>
                    <li>
                        <a href="/creer-graphe">
                            <span class="glyphicon glyphicon-plus-sign"></span> Créer
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <!--CONTENT-->
        <div class="container-fluid">
            <div ng-view></div>
        </div>
        
        
        <!--MODULES JS-->
        <script src="app/app.js"></script>
        <script src="app/route.js"></script>
        <script src="app/controllers/accueil.ctrl.js"></script>

        <script src="app/services/webReporting.service.js"></script>


        <script src="app/controllers/informations.ctrl.js"></script>

        <script src="app/controllers/tableau.ctrl.js"></script>

        <script src="app/controllers/carte.ctrl.js"></script>
        <script src="app/directives/carte.velibMaPosition.directive.js"></script>
        <script src="app/directives/carte.velibEurope.directive.js"></script>

        <script src="app/controllers/analyse.ctrl.js"></script>

        <script src="app/controllers/creerGraphe.ctrl.js"></script>


    </body>
</html>