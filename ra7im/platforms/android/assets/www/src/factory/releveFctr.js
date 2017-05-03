angular.module('branchementApp').factory('releveFctr', function ($http, $q) {
    var factory = {
        releve: null,
        
        ListReleveSelonClient: function (idCli) {
            var releves = [{
               
                facture: 'N°12',
                date: '12/02/1994'

            }, {
                identifiant: '144FG',
                branchement: '456',
                facture: 'N°96',
                date: '12/02/1994'
            }, {
              
                facture: 'N°14',
                date: '12/02/1994'
            }, {
               
                facture: 'N°25',
                date: '12/02/1994'
            }, {
               
                facture: 'N°12',
                date: '12/02/1994'
            }


            ];
            return releves;
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