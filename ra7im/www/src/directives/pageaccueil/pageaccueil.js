angular.module('branchementApp').directive('accueil', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/accueil/accueil.html',
        controllerAs: 'accueilctrl',
        controller: function ($scope, $state, branchementFctr) {
            $scope.facturesImpayees = function () {
                $state.go('listfactimpayees');
            }
            $scope.notificationsNonLues = function () {
                $state.go('listenotifications');
            }
            $scope.reclamationsEncours = function () {
                $state.go('listreclencours');
            }
            $scope.reclamationsRejetees = function () {
                $state.go('listreclrejetees');
            }
            $scope.details = function () {
                $state.go('branchement');
            }
            $scope.branchements = branchementFctr.ListBranchementSelonClient(2);

        }
    }
});

angular.module('branchementApp').directive('listfactimpayees', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/listfactimpayees/listfactimpayees.html',
        controllerAs: 'listfactimpayeesctrl',
        controller: function ($scope, $state, factureFctr) {
            $scope.reference = function () {
                $state.go('authentif');
            }
            $scope.factures = factureFctr.ListFactureImpySelonClient();
        }
    }
});
angular.module('branchementApp').directive('listreclencours', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/listreclencours/listreclencours.html',
        controllerAs: 'listreclencoursctrl',
        controller: function ($scope, $state, reclamationFctr) {
            $scope.reclamations = reclamationFctr.ListReclamationEncourSelonClient();
        }
    }
});
angular.module('branchementApp').directive('listreclrejetees', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/listreclrejetees/listreclrejetees.html',
        controllerAs: 'listreclrejeteesctrl',
        controller: function ($scope, $state, reclamationFctr) {
            $scope.reclamations = reclamationFctr.ListReclamationRejetSelonClient();
        }
    }
});

angular.module('branchementApp').directive('branchement', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/directives/branchement/branchement.html',
        controllerAs: 'branchementctrl',
        controller: function ($scope, $state) {
            $scope.historiqueReleve = function () {
                $state.go('historeleves');
            }
            $scope.historiqueFactures = function () {
                $state.go('histofactures');
            }
            $scope.historiqueReclamations = function () {
                $state.go('historeclamation');
            }
            $scope.historiqueNotifications = function () {
                $state.go('histonotification');
            }
        }
    }
});

