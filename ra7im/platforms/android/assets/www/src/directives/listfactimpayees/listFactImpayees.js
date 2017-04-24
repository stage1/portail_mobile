angular.module('branchementApp').directive('listfactimpayees', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/listfactimpayees/listfactimpayees.html',
        controllerAs: 'listfactimpayeesctrl',
        controller: function ($scope, $state ,factureFctr) {
            $scope.reference = function () {
                $state.go('authentif');
            }
            $scope.factures = factureFctr.ListFactureImpySelonClient();
        }
    }
});