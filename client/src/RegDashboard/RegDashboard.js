/**
 * Created by reedanderson on 2/2/15.
 */
var myModule = angular.module('RegDashboard',
    [
        //'ngRoute',
        'RegDashboard.Common',
        'RegDashboard.Dashboard'
    ]);

myModule.constant('Firebase', window.Firebase);
