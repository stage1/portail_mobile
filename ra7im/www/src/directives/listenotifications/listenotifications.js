angular.module('branchementApp').directive('listenotifications', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/listenotifications/listenotifications.html',
        controllerAs: 'listenotificationsctrl',
        controller: function ($scope, $state, notificationFctr) {
        }
    }
});
