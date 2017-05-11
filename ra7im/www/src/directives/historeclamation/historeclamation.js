angular.module('branchementApp').directive('historeclamation', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/historeclamation/historeclamation.html',
        controllerAs: 'historeclamationctrl',
        controller: function ($scope, $state ,reclamationFctr) {
            
            $scope.reclamations = reclamationFctr.ListHistoReclamation();
        }
    }
});