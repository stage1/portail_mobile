angular.module('branchementApp').directive('deposereclamation', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/deposereclamation/deposereclamation.html',
        controllerAs: 'deposereclamationctrl',
        controller: function ($scope, $state) {
            $scope.envoyer = function () {
                $state.go('');
            }
        }
    }
});