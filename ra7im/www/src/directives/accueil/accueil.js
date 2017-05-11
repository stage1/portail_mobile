angular.module('branchementApp').directive('accueil', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/accueil/accueil.html',
        controllerAs: 'accueilctrl',
        controller: function ($scope, $state, branchementFctr) {
            $scope.details = function () {
                $state.go('branchement');
            }
            $scope.branchements = branchementFctr.ListBranchement();
         
        }
    }
});