/**
 * Created by reedanderson on 2/3/15.
 */
angular.model('RegDashboard.Dashboard')
    .directive('rdReg', rdReg);

    function rdReg() {
        var directive = {
            transclude: true,
            template: '<table><tbody><tr><td>{{reg.title}}</td><td>{{reg.court}}</td><td>{{reg.instance}}</td><td>{{reg.date}}</td></tr></tbody></table>',
            restrict: 'EA'
        };

        return directive;
    };
