angular.module('branchementApp').directive('branchement', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/branchement/branchement.html',
        controllerAs: 'branchementctrl',
        controller: function ($scope, $state) {
        }
    }
});