angular.module('branchementApp').directive('accueil', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/accueil/accueil.html',
        controllerAs: 'accueilctrl',
        controller: function ($scope, $state) {
            $scope.facturesImpayees = function () {
                $state.go('listFactImpayees');
            }
            $scope.notificationsNonLues = function () {
                $state.go('listenotifications');
            }
            $scope.reclamationsEncours = function () {
                $state.go('listReclEncours');
            }
            $scope.reclamationsRejetees = function () {
                $state.go('listReclRejetees');

            }
            $scope.branchements = function () {
                $state.go('detailsBranchement');
            }
            $scope.branchements = function () 
            {reference:"kh135"},
            {reference:"bn147"},
            {reference:"oiiu455"}


            
    
            }}});