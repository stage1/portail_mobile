angular.module('branchementApp').factory('reclamationFctr', function ($http, $q) {
    var factory = {
        reclamation: null,
        
        ListReclamationEncourSelonClient: function (idCli) {
            var reclamations = [{
                reference: '147441',
                etapeCours: 'final',
                dateRenvezVous: '12/02/1994'

            }, {
                reference: '144891',
                etapeCours: 'demi-final',
                dateRenvezVous: '15/06/1999'
            }, {
                reference: '14891',
                etapeCours: 'debut',
                dateRenvezVous: '15/07/2008'
            }, {
                reference: '143741',
                etapeCours: 'final',
                dateRenvezVous: '02/06/2010'
            }

            ];

            return reclamations;
        },
         ListReclamationRejetSelonClient: function (idCli) {
             var reclamations = [{
                 reference: '147441',
                 motifRejet: 'final',
                 dateRejet: '12/02/1994'

             }, {
                 reference: '144891',
                 motifRejet: 'demi-final',
                 dateRejet: '15/06/1999'
             }, {
                 reference: '14891',
                 motifRejet: 'debut',
                 dateRejet: '15/07/2008'
             }, {
                 reference: '143741',
                 motifRejet: 'final',
                 dateRejet: '02/06/2010'
             }

             ];

            return reclamations;
         },
         ListHistoReclamationSelonClient: function (idCli) {
             var reclamations = [{
                 reference: 'FR147',
                 type: 'N°12',
                 objet: '12/02/1994'

             }, {
                 reference: '144FG',
                 type: 'N°96',
                 objet: '12/02/1994'
             }, {
                 reference: '148BV',
                 type: 'N°14',
                 objet: '12/02/1994'
             }, {
                 reference: '14HF1',
                 type: 'N°25',
                 objet: '12/02/1994'
             }, {
                 reference: '14AZ1',
                 type: 'N°12',
                 objet: '12/02/1994'
             }


             ];
             return reclamations;
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