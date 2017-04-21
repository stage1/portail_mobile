angular.module('branchementApp').directive('historeclamation', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/historeclamation/historeclamation.html',
        controllerAs: 'historeclamationctrl',
        controller: function ($scope, $state ,reclamationFctr) {
            $scope.deposer = function () {
                $state.go('deposereclamation');
            }
            $scope.reclamations = reclamationFctr.ListHistoReclamationSelonClient();
        }
    }
});