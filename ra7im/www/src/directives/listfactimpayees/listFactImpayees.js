angular.module('branchementApp').directive('listfactimpayees', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/listfactimpayees/listfactimpayees.html',
        controllerAs: 'listfactimpayeesctrl',
        controller: function ($scope, $state, factureFctr) {
            $scope.factures = factureFctr.ListFactureImpy();
        }
    }
});