angular.module('branchementApp').factory('releveFctr', function ($http, $q) {
    var factory = {
        Releves: null,


            /*liste des historiques releves*/
        ListHistoReleve: function () {
            var url = urlService + "/Historeleves/'";
            var config = {};
            //var deferred = $q.defer();
            $http.get(url, config)
                .success(function (data, status) {
                    if (data !== "") {
                        factory.Releve = data;
                        deferred.resolve(data);
                    }
                    else {
                        deferred.resolve(null);
                    }
                }).error(function (error, status) {
                    deferred.reject("Erreur listreleves");
                });
            return deferred.promise;
        }
        /**************************************************************/
    };
    return factory;
});