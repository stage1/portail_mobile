angular.module('branchementApp').directive('authentif', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/authentif/authentif.html',
        controllerAs: 'authentifctrl',
        controller: function ($scope, $state) {
            $scope.login = function () {
                 //if ..;....
                $state.go('accueil');
            }
        }
    }
});