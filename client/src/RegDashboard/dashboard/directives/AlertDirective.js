/**
 * Created by reedanderson on 2/5/15.
 */
angular.module('RegDashboard.Dashboard')
    .directive('rdAlert', rdAlert);

    function rdAlert() {
        var directive = {
            scope: true,
            replace: true,
            templateUrl: 'src/regDashboard/dashboard/template/alert.html'
        };

        return directive;
    }