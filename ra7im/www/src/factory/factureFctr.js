angular.module('branchementApp').factory('factureFctr', function ($http, $q) {
    var factory = {
        FactureImpy: null,
        factures: null,

        /*Liste des factures impayées*/

        ListFactureImpy: function (ref,dateExi,Restpay) {

            var url = urlService + "/listfactimpayees/'" + ref + "'/'" + dateExi + "'/'"+ RestPay+"'";
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

        ListHistoFacture: function (ref,tva,ttc) {

            var url = urlService + "/histofactures/'" + ref + "'/'" + tva + "'/'" + ttc+ "'";
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

