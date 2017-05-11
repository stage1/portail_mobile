﻿angular.module('branchementApp').factory('branchementFctr', function ($http, $q) {
    var factory = {
        Branchement: [],
        /*liste des branchements*/
        ListBranchement: function (idCli) {
            var url = urlService + "/branchement/'";
            var config = {};
            //var deferred = $q.defer();
            $http.get(url, config)
                .success(function (data, status) {
                    if (data !== "") {
                        factory.Branchement = data;
                        deferred.resolve(data);
                    }
                    else {
                        deferred.resolve(null);
                    }
                }).error(function (error, status) {
                    deferred.reject("Erreur listbranchement");
                });
            return deferred.promise;
        }
        /**************************************************************/
    };
    return factory;
});