angular.module('branchementApp').directive('accueil', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/accueil/accueil.html',
        controllerAs: 'accueilctrl',
        controller: function ($scope, $state) {
            $scope.branchements = [
                        { identifiant: "branchement1" },
                        { identifiant: "branchement2" },
                        { identifiant: "branchement3" },
                        { identifiant: "branchement4" },
                        { identifiant: "branchement5" }
            ];
        }
    }
});