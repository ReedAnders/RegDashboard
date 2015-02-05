/**
 * Created by reedanderson on 2/2/15.
 */
angular.module('RegDashboard.Tables',['RegDashboard.Common'])
    .controller('TablesCtrl',
    function (regModel, serverListPageCount) {
        var tables = this;

        tables.regs = regModel.getRegs();
        tables.users = regModel.getUsers();
        tables.userCount = regModel.getUserCount();
        tables.serversCount = regModel.getServersCount();

        tables.selectedPage = 1;
        tables.pageSize = serverListPageCount;

        tables.selectPage = function (newPage) {
            tables.selectedPage = newPage;
        };

    });
