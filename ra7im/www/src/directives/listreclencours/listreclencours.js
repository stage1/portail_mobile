angular.module('branchementApp').directive('listreclencours', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/listreclencours/listreclencours.html',
        controllerAs: 'listreclencoursctrl',
        controller: function ($scope, $state) {
            $scope.reclamations = [{
                reference: '147441',
                etapeCours: 'final',
                dateRenvezVous: '12/02/1994'
               
            }, {
                reference: '144891',
                etapeCours: 'demi-final',
                dateRenvezVous: '15/06/1999'
            }, {
                reference: '14891',
                etapeCours: 'debut',
                dateRenvezVous: '15/07/2008'
            }, {
                reference: '143741',
                etapeCours: 'final',
                dateRenvezVous: '02/06/2010'
            }

            ];
        }
    }
});