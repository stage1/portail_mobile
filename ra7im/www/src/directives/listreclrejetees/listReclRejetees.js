angular.module('branchementApp').directive('listreclrejetees', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/listreclrejetees/listreclrejetees.html',
        controllerAs: 'listreclrejeteesctrl',
        controller: function ($scope, $state) {
            $scope.reclamations = [{
                reference: '147441',
                motifRejet: 'final',
                dateRejet: '12/02/1994'

            }, {
                reference: '144891',
                motifRejet: 'demi-final',
                dateRejet: '15/06/1999'
            }, {
                reference: '14891',
                motifRejet: 'debut',
                dateRejet: '15/07/2008'
            }, {
                reference: '143741',
                motifRejet: 'final',
                dateRejet: '02/06/2010'
            }

            ];
        }
    }
});