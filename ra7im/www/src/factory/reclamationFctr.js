angular.module('branchementApp').factory('reclamationFctr', function ($http, $q) {
    var factory = {
        reclamationRejet: null,
        reclamationAccep: null,
        reclamation: null,

        /*liste réclamations encours*/

        ListReclamationEncour: function () {
            var url = urlService + "/listreclencours/'";
            var config = {};
            //var deferred = $q.defer();
            $http.get(url, config)
                .success(function (data, status) {
                    if (data !== "") {
                        factory.reclamationAccep = data;
                        deferred.resolve(data);
                    }
                    else {
                        deferred.resolve(null);
                    }
                }).error(function (error, status) {
                    deferred.reject("Erreur listreclencours");
                });
            return deferred.promise;
        },
        /**************************************************************/

        /*liste réclamations rejetés*/

        ListReclamationRejet: function () {
            var url = urlService + "/listreclrejetees/'";
            var config = {};
            //var deferred = $q.defer();
            $http.get(url, config)
                .success(function (data, status) {
                    if (data !== "") {
                        factory.reclamationRejet = data;
                        deferred.resolve(data);
                    }
                    else {
                        deferred.resolve(null);
                    }
                }).error(function (error, status) {
                    deferred.reject("Erreur listreclrejetees");
                });
            return deferred.promise;
        },
        /**************************************************************/

        /*liste des historiques réclamations*/
        ListHistoReclamation: function () {
            var url = urlService + "/historeclamation/'";
            var config = {};
            //var deferred = $q.defer();
            $http.get(url, config)
            .success(function (data, status) {
                if (data !== "") {
                    factory.ListBranchement = data;
                    deferred.resolve(data);
                }
                else {
                    deferred.resolve(null);
                }
            }).error(function (error, status) {
                deferred.reject("Erreur hisoreclamation");
            });
            return deferred.promise;
        },
        /**************************************************************/
        /*création d'une réclamation*/
        Create: function (reclamation) {
            var url = urlService + "/deposerreclamation";
            //var deferred = $q.defer();
            $http.post(url, reclmation)
                .success(function (data, status) {
                    deferred.resolve(data);
                }).error(function (error, status) {
                    deferred.reject(_err_depoRecl);
                });
            return deferred.promise;
        },
        /********************************************************************************/

          };

     
    return factory;
});