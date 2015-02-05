/**
 * Alerts Controller
 */

angular
    .module('RegDashboard.Common')
    .controller('AlertsCtrl', function ($cookieStore) {
        var rdAlerts = this;

        rdAlerts.alerts = [{
            type: 'success',
            msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
        }, {
            type: 'danger',
            msg: 'Found a bug? Create an issue with as many details as you can.'
        }];

        rdAlerts.addAlert = function() {
            rdAlerts.alerts.push({
                msg: 'Another alert!'
            });
        };

        rdAlerts.closeAlert = function(index) {
            rdAlerts.alerts.splice(index, 1);
        };

        //TODO add $cookieStore for alerts
        rdAlerts.hideAlerts = true;

    });