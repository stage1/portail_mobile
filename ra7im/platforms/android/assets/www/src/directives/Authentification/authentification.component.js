angular.module('ra7im').directive('Authentification', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/Authentification/authentification.html',
        controllerAs: 'authenctrl',
        controller: function ($scope, $state, UtilisateurFactory) {
            $scope.Authentification = function () {
                $scope.utilisateur = UtilisateurFactory.authentification('', '');

           
            }
        }
    }})