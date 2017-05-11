
angular.module('branchementApp').factory('reclamationFctr', function ($http, $q) {
    var factory = {
        reclamationRejet: null,
        reclamationAccep: null,
        reclamations: null,

        /*liste réclamations encours*/

        ListReclamationEncour: function (ref,etape,date) {
            var url = urlService + "/listreclencours/'" + ref + "'/'" + etape + "'/'" + date + "'";
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

        /*liste réclamations rejetées*/

        ListReclamationRejet: function (ref,motifRej,DatRej) {
            var url = urlService + "/listreclrejetees/'" + ref + "'/'" +motifRej + "'/'" +datRej + "'";
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
        ListHistoReclamation: function (ref,type,object) {
            var url = urlService + "/historeclamation/'" + ref+ "'/'" + type + "'/'" + Object + "'";
            var config = {};
            //var deferred = $q.defer();
            $http.get(url, config)
            .success(function (data, status) {
                if (data !== "") {
                    factory.reclamations = data;
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
        Create: function (nom,email,reclamation) {
            var url = urlService + "/deposerreclamation/'" +nom + "'/'" + email+ "'/'" + reclamation +"'";
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