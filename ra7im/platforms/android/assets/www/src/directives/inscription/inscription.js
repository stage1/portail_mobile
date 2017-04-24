angular.module('branchementApp').directive('inscription', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/inscription/inscription.html',
        controllerAs: 'inscriptionctrl',
        controller: function ($scope, $state) {
            $scope.inscrire = function () {
                $state.go('accueil');
            }
        }
    }
});