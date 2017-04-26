angular.module('branchementApp').directive('detailbranchement', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/detailbranchement/detailbranchement.html',
        controllerAs: 'detailbranchementctrl'
        }
    }
});