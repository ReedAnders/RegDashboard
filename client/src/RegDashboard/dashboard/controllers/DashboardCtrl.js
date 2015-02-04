/**
 * Created by reedanderson on 2/2/15.
 */
angular.module('RegDashboard.Dashboard',['RegDashboard.Common'])
    .controller('DashboardCtrl',
    function (regModel) {
        var dashboard = this;
        dashboard.regs = regModel.getRegs();
        dashboard.users = regModel.getUsers();
        dashboard.userCount = regModel.getUserCount();
        dashboard.serversCount = regModel.getServersCount();

    });
