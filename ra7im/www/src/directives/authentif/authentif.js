
angular.module('branchementApp').directive('authentif', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/authentif/authentif.html',
        controllerAs: 'authentifctrl',
        controller: function ($scope, $state, utilisateurFctr) {
            $scope.slogin = '';
            $scope.smdp = '';
            $scope.login = function () {
                //todo : test sur la nullabilité de login et mot de passe
                utilisateurFctr.authentification($scope.slogin, $scope.smdp).then(function (data) {
                    $state.go('accueil');
                }, function (err) {
                    //todo : Afficher erreur 
                });
            }      
                $scope.abonne = function () {
                    $state.go('inscription');

            }
        }
    }
});