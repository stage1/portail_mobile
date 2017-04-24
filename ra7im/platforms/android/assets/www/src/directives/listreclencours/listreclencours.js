angular.module('branchementApp').directive('listreclencours', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/listreclencours/listreclencours.html',
        controllerAs: 'listreclencoursctrl',
        controller: function ($scope, $state ,reclamationFctr) {
            $scope.reclamations = reclamationFctr.ListReclamationEncourSelonClient();
        }
    }
});