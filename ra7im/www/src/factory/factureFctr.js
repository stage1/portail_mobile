angular.module('branchementApp').factory('factureFctr', function ($http, $q) {
    var factory = {
        FactureImpy: null,
        factures: null,

        /*Liste des factures impayées*/

        ListFactureImpySelonClient: function () {

            var url = urlService + "/listfactimpayees";
            var config = {};
            //var deferred = $q.defer();
            $http.get(url, config)
                .success(function (data, status) {
                    if (data !== "") {
                        factory.FactureImpy = data;
                        deferred.resolve(data);
                    }
                    else {
                        deferred.resolve(null);
                    }
                }).error(function (error, status) {
                    deferred.reject("Erreur listFactureImpy");
                });
            return deferred.promise;
        },



        /**************************************************************/

        /*Liste des Historique factures*/

        ListHistoFactureSelonClient: function () {

            var url = urlService + "/histofactures";
            var config = {};
            //var deferred = $q.defer();
            $http.get(url, config)
                .success(function (data, status) {
                    if (data !== "") {
                        factory.factures = data;
                        deferred.resolve(data);
                    }
                    else {
                        deferred.resolve(null);
                    }
                }).error(function (error, status) {
                    deferred.reject("Erreur histofactures");
                });
            return deferred.promise;
        }
        /**************************************************************/

    };
    return factory;

});

