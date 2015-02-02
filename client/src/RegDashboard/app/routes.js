'use strict';

/**
 * Route configuration for the RegDashboard module.
 */
angular.module('RegDashboard')
    .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: '../dashboard/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: '../tables/tables.html'
            });
    }
]);