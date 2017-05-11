angular.module('branchementApp').directive('inscription', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/inscription/inscription.html',
        controllerAs: 'inscriptionctrl',
        controller: function ($scope, $state, utilisateurFctr) {
            $scope.ref = '';
            $scope.login = '';
            $scope.cin = '';
            $scope.tel = '';
            $scope.mdp = '';
            $scope.create = function () {
                utilisateurFctr.inscription($scope.ref, $scope.login, $scope.cin, $scope.tel, $scope.mdp).then(function (data) {
                    $state.go('accueil');
                }, function (err) {
                });
            }
        }
    }
});