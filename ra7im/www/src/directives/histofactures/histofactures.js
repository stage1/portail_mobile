angular.module('branchementApp').directive('histofactures', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/histofactures/histofactures.html',
        controllerAs: 'histofacturesctrl',
        controller: function ($scope, $state) {
            $scope.factures = [{
                reference: 'FR147',
                branchement: '123',
                tva: '14$',
                ttc: '156$'

            }, {
                reference: '144FG',
                branchement: '456',
                tva: '123$',
                ttc: '123.12$'
            }, {
                reference: '148BV',
                branchement: '896',
                tva: '365$',
                ttc: '12.256$'
            }, {
                reference: '14HF1',
                branchement: '147',
                tva: '123$',
                ttc: '110$'
            }

            ];
        }
    }
});