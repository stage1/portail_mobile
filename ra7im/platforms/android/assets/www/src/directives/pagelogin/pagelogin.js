angular.module('branchementApp').directive('pagelogin', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/pagelogin/pagelogin.html',
        controllerAs: 'pageloginctrl',
        controller: function ($scope, $state) {
            $scope.loginwindow = function () {
                $state.go('authentif');
            }
        }
    }
});
