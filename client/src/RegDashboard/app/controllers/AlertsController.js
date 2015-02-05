/**
 * Alerts Controller
 */

angular
    .module('RegDashboard.Common')
    .controller('AlertsCtrl', function ($cookieStore) {
        var AlertsCtrl = this;

        AlertsCtrl.alerts = [{
            type: 'success',
            msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
        }, {
            type: 'danger',
            msg: 'Found a bug? Create an issue with as many details as you can.'
        }];

        AlertsCtrl.addAlert = function() {
            rdAlerts.alerts.push({
                msg: 'Another alert!'
            });
        };

        AlertsCtrl.closeAlert = function(index) {
            AlertsCtrl.alerts.splice(index, 1);
        };

        //TODO add $cookieStore for alerts
        AlertsCtrl.hideAlerts = false;

    });