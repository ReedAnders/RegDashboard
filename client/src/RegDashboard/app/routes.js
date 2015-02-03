'use strict';

/**
* Route configuration for the regDashboard module.
*/
angular.module('RegDashboard.Common')
    .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'src/regDashboard/dashboard/template/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'src/regDashboard/tables/template/tables.html'
            });
    }
]);