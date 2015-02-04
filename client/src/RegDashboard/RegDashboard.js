/**
 * Created by reedanderson on 2/2/15.
 */
var myModule = angular.module('RegDashboard',
    [
        //'ngRoute',
        'RegDashboard.Common',
        'RegDashboard.Dashboard',
        'RegDashboard.Tables'
    ]);

myModule.config(['$stateProvider', '$urlRouterProvider',
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

myModule.constant('Firebase', window.Firebase);
