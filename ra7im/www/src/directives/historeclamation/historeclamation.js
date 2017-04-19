angular.module('branchementApp').directive('historeclamation', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/historeclamation/historeclamation.html',
        controllerAs: 'historeclamationctrl',
        controller: function ($scope, $state) {
            $scope.deposer = function () {
                $state.go('deposereclamation');
            }
            $scope.reclamations = [{
                identifiant: 'FR147',
                branchement: '123',
                type: 'N°12',
                objet: '12/02/1994'

            }, {
                identifiant: '144FG',
                branchement: '456',
                type: 'N°96',
                objet: '12/02/1994'
            }, {
                identifiant: '148BV',
                branchement: '896',
                type: 'N°14',
                objet: '12/02/1994'
            }, {
                identifiant: '14HF1',
                branchement: '147',
                type: 'N°25',
                objet: '12/02/1994'
            }, {
                identifiant: '14AZ1',
                branchement: '369',
                type: 'N°12',
                objet: '12/02/1994'
            }


            ];
        }
    }
});