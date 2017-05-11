angular.module('branchementApp').directive('histofactures', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/histofactures/histofactures.html',
        controllerAs: 'histofacturesctrl',
        controller: function ($scope, $state, factureFctr) {
            $scope.factures = factureFctr.ListHistoFacture();
        }
    }
});