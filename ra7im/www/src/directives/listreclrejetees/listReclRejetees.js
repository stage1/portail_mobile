angular.module('branchementApp').directive('listreclrejetees', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/listreclrejetees/listreclrejetees.html',
        controllerAs: 'listreclrejeteesctrl',
        controller: function ($scope, $state ,reclamationFctr) {
            $scope.reclamations = reclamationFctr.ListReclamationRejet();
        }
    }
});