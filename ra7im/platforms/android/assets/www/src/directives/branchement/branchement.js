angular.module('branchementApp').directive('branchement', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/branchement/branchement.html',
        controllerAs: 'branchementctrl',
        controller: function ($scope, $state) {
            $scope.historiqueReleve = function () {
                $state.go('historeleves');
            }
            $scope.historiqueFactures = function () {
                $state.go('histofactures');
            }
            $scope.historiqueReclamations = function () {
                $state.go('historeclamation');
            }
            $scope.historiqueNotifications = function () {
                $state.go('histonotification');
            }
        }
    }
});