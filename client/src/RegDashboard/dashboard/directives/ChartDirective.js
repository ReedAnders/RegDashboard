/**
 * Created by reedanderson on 2/3/15.
 */
angular.module('RegDashboard.Dashboard')
    .directive('rdReg', rdReg);

    function rdReg() {
        var directive = {
            scope: true,
            replace: true,
            templateUrl: 'src/regDashboard/dashboard/template/chart.html'
        };

        return directive;
    };
