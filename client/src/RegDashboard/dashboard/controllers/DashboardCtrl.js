/**
 * Created by reedanderson on 2/2/15.
 */
angular.module('RegDashboard.Dashboard')
    .controller('DashboardCtrl',
    function (regModel) {
        var dashboard = this;
        dashboard.regs = regModel.getRegs();

    });
