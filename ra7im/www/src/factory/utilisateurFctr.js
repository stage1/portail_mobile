angular.module('branchementApp').factory('utilisateurFctr', function ($http, $q) {
    var factory = {
        utilisateur: null,

        /*Authentification*/
        authentification: function (login, mdp) {
            var url = urlService + "/authentif/'" + login + "'/'" + mdp + "'";
            var config = {};
            //var deferred = $q.defer();
            $http.get(url, config)
                .success(function (data, status) {
                    if (data !== "") {
                        factory.utilisateur = data;
                        deferred.resolve(data);
                    }
                    else {
                        deferred.resolve(null);
                    }
                }).error(function (error, status) {
                    deferred.reject("Erreur authentification");
                });
            return deferred.promise;
        },
        /**************************************************************/
        /*creation d'un compte*/
        inscription: function (referene,login,cin,tel, mdp) {
        var url = urlService + "/inscription/'" + reference + "'/'" + login + "'/'"+ cin +"'/'"+ tel +"'/'"+ mdp +"'";
        var config = {};
            //var deferred = $q.defer();
        $http.post(url, config)
            .success(function (data, status) {
                if (data !== "") {
                    factory.utilisateur = data;
                    deferred.resolve(data);
                }
                else {
                    deferred.resolve(null);
                }
            }).error(function (error, status) {
                deferred.reject("Erreur inscription");
            });
        return deferred.promise;
    }
    /

    };
    return factory;
});