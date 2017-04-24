angular.module('branchementApp').directive('histonotification', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/histonotification/histonotification.html',
        controllerAs: 'histonotificationctrl',
        controller: function ($scope, $state , notificationFctr) {
            $scope.notifications = notificationFctr.ListHistoNotificationSelonClient();
        }
    }
});
