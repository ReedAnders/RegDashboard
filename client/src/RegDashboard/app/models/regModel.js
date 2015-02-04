/**
 * Created by reedanderson on 2/3/15.
 */
angular.module('RegDashboard.Common')
    .service('regModel', function () {
        var service = this,
            //TODO decouple text and status from view
            regs = [
                {title: 'RDVMPC001', ip:'238.103.133.37', text:'text-success', status:'fa fa-check'},
                {title: 'RDVMPC001', ip:'68.66.63.170', text:'text-success', status:'fa fa-check'},
                {title: 'RDVMPC001', ip:'76.117.212.33',text:'text-danger', status:'fa fa-warning'},
                {title: 'RDVMPC001', ip:'91.88.224.5', text:'text-success', status:'fa fa-check'},
                {title: 'RDVMPC001', ip:'197.188.15.93', text:'text-success', status:'fa fa-check'},
                {title: 'RDVMPC001', ip:'168.85.154.251', text:'text-success', status:'fa fa-check'},
                {title: 'RDVMPC001', ip:'209.25.191.61', text:'text-danger', status:'fa fa-warning'},
                {title: 'RDVMPC001', ip:'252.37.192.235', text:'text-success', status:'fa fa-check'}
            ],
            users = [
                {ID: '1', Username: 'Joe Bloggs', Role: 'Super Admin', Account: 'AZ23045'},
                {ID: '2', Username: 'Timothy Hernandez', Role: 'Admin', Account: 'AU24783'},
                {ID: '3', Username: 'Joe Bickham', Role: 'User', Account: 'AM23781'}
            ];

        service.getRegs = function (){
            return regs;
        };

        service.getUsers = function (){
            return users
        };
    });