angular.module('branchementApp').directive('listfactimpayees', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/listfactimpayees/listfactimpayees.html',
        controllerAs: 'listfactimpayeesctrl',
        controller: function ($scope, $state) {
            $scope.reference = function () {
                $state.go('authentif');
            }
            $scope.factures = [{
                reference: '147441',
                dateExigibilite:'12/02/1994',
                montantHt: '123' ,
                montantTtc: '125' ,
                restePaye: 357
            }, {
                reference: '144891',
                dateExigibilite: '15/06/1999',
                montantHt: '123',
                montantTtc: '125',
                restePaye: 213
            }, {
                reference: '14891',
                dateExigibilite: '15/07/2008',
                montantHt: '123',
                montantTtc: '125',
                restePaye: 985
            }, {
                reference: '143741',
                dateExigibilite: '02/06/2010',
                montantHt: '123',
                montantTtc: '125',
                restePaye: 365
            }
            
            ];
        }
    }
});