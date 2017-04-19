angular.module('branchementApp').directive('histonotification', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/histonotification/histonotification.html',
        controllerAs: 'histonotificationctrl',
        controller: function ($scope, $state) {
            $scope.notifications = [{
                reference: 'FR147',
                classement: '123',
                message: 'reclamation rejet',
                etat: 'lu'

            }, {
                reference: 'FR147',
                classement: '123',
                message: 'prestation validé',
                etat: 'lu'
            }, {
                reference: 'FR147',
                classement: '123',
                message: 'manque des fichiers',
                etat: 'lu'
            }, {
                reference: 'FR147',
                classement: '123',
                message: '',
                etat: 'Non lu'
            }, {
                reference: 'FR147',
                classement: '123',
                message: 'N°12',
                etat: 'Non lu'
            }


            ];
        }
    }
});
