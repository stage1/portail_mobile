angular.module('branchementApp').directive('accueil', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/accueil/accueil.html',
        controllerAs: 'accueilctrl',
        controller: function ($scope, $state, branchementFctr) {
            $scope.facturesImpayees = function () {
                $state.go('listfactimpayees');
            }
            $scope.notificationsNonLues = function () {
                $state.go('listenotifications');
            }
            $scope.reclamationsEncours = function () {
                $state.go('listreclencours');
            }
            $scope.reclamationsRejetees = function () {
                $state.go('listreclrejetees');
            }
            $scope.details = function () {
                $state.go('branchement');
            }
            $scope.branchements = branchementFctr.ListBranchementSelonClient(2);
         
        }
    }
});