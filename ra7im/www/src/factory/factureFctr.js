angular.module('branchementApp').factory('factureFctr', function ($http, $q) {
    var factory = {
        compte: null,
        ffff: 'll',
        ListFactureImpySelonClient: function (idCli) {
            var factures = [{
                reference: '147441',
                dateExigibilite: '12/02/1994',
                montantHt: '123',
                montantTtc: '125',
                restePaye: 357
            }, {
                reference: '144891',
                dateExigibilite: '15/06/1999',
                montantHt: '123',
                montantTtc: '125',
                restePaye: 213
            }, {
                reference: '14891',
                dateExigibilite: '15/07/2008',
                montantHt: '123',
                montantTtc: '125',
                restePaye: 985
            }, {
                reference: '143741',
                dateExigibilite: '02/06/2010',
                montantHt: '123',
                montantTtc: '125',
                restePaye: 365
            }

            ];
            return factures;
        },
        ListHistoFactureSelonClient: function (idCli) {
            var factures = [{
                reference: 'FR147',
                branchement: '123',
                tva: '14$',
                ttc: '156$'

            }, {
                reference: '144FG',
                branchement: '456',
                tva: '123$',
                ttc: '123.12$'
            }, {
                reference: '148BV',
                branchement: '896',
                tva: '365$',
                ttc: '12.256$'
            }, {
                reference: '14HF1',
                branchement: '147',
                tva: '123$',
                ttc: '110$'
            }

            ];
            return factures;
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