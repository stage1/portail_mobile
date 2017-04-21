angular.module('branchementApp').directive('historeleves', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/historeleves/historeleves.html',
        controllerAs: 'historelevesctrl',
        controller: function ($scope, $state, releveFctr) {
            $scope.releves = releveFctr.ListReleveSelonClient();
        }
    }
});