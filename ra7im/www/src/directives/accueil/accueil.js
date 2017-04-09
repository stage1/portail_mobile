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
            $scope.details = function () {
                $state.go('detailsBranchement');
            }
            $scope.branchements = [{
                reference: 1441,
                adresse: 'John'
            }, {
                reference: 1502,
                adresse: 'Jane'
            }, {
                reference: 7453,
                adresse: 'Jude',
            }, {
                reference: 124,
                adresse: 'James',
              
            }, {
                reference: 4875,
                adresse: 'Harry'
          
            }];
         
            }}});