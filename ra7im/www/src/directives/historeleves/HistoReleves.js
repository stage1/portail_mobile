angular.module('branchementApp').directive('historeleves', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/historeleves/historeleves.html',
        controllerAs: 'historelevesctrl',
        controller: function ($scope, $state) {
            $scope.releves = [{
                identifiant: 'FR147',
                branchement: '123',
                facture: 'N°12',
                date: '12/02/1994'

            }, {
                identifiant: '144FG',
                branchement: '456',
                facture: 'N°96',
                date: '12/02/1994'
            }, {
                identifiant: '148BV',
                branchement: '896',
                facture: 'N°14',
                date: '12/02/1994'
            }, {
                identifiant: '14HF1',
                branchement: '147',
                facture: 'N°25',
                date: '12/02/1994'
            }, {
                identifiant: '14AZ1',
                branchement: '369',
                facture: 'N°12',
                date: '12/02/1994'
            }


            ];
        }
    }
});