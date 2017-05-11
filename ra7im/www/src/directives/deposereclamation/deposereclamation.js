angular.module('branchementApp').directive('deposereclamation', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/deposereclamation/deposereclamation.html',
        controllerAs: 'deposereclamationctrl',
        controller: function ($scope, $state,reclamationFctr) {
        $scope.nom = '',
        $scope.mail = '',
        $scope.reclamation='',
        $scope.envoyer = function () {
            reclamationFctr.deposereclamation($scope.nom, $scope.mail,$scope.reclamation).then(function (data) {
                $state.go('accueil');
            }, function (err) {
                //todo : Afficher erreur 
            });
        }
            }
        }
    }
});