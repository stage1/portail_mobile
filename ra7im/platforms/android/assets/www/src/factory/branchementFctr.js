angular.module('branchementApp').factory('branchementFctr', function ($http, $q) {
    var factory = {
        branchement: null,
        
        ListBranchementSelonClient: function(idCli){
            var branchements = [{
                reference: 1441,
                adresse: 'John'
            }, {
                reference: 1502,
                adresse: 'Jane'
            }, {
                reference: 7453,
                adresse: 'Jude',
            }, {
                reference: 1224,
                adresse: 'James',

            }, {
                reference: 4875,
                adresse: 'Harry'

            }];
            return branchements;
        },
        /*List des image d'une page*/
        authentification: function (login, mdp) {
            utilisateur = { Id: '1', Nom: 'hkh' };
            return utilisateur;
            /*
            var url = urlService + "/api/comptes/login/'" + login + "'/'" + mdp + "'";
            var config = {};
            var deferred = $q.defer();
            $http.get(url, config)
                .success(function (data, status) {
                    if (data !== "") {
                        factory.compte = data;
                        deferred.resolve(data);
                    }
                    else {
                        deferred.resolve(null);
                    }
                }).error(function (error, status) {
                    deferred.reject("Erreur authentification");
                });
            return deferred.promise;*/
        }
        /**************************************************************/
    };
    return factory;
});