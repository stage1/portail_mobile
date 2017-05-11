angular.module('branchementApp').factory('factureFctr', function ($http, $q) {
    var factory = {
        ListFacture: [],
        ListHistoFacture: [],
        factures: null,

        /*Liste des factures impayées*/

        ListFactureImpySelonClient: function (idCli) {
            var factures = [{
                reference: '147441',
                dateExigibilite: '12/02/1994',
                montantTtc: '125',
                restePaye: 357
            }, {
                reference: '144891',
                dateExigibilite: '15/06/1999',
                montantTtc: '125',
                restePaye: 213
            }, {
                reference: '14891',
                dateExigibilite: '15/07/2008',
                montantTtc: '125',
                restePaye: 985
            }, {
                reference: '143741',
                dateExigibilite: '02/06/2010',
                montantTtc: '125',
                restePaye: 365
            }

            ];
            return factures;

            var url = urlService + "/listfactimpayees/'" + login + "'/'" + mdp + "'";
            var config = {};
            //var deferred = $q.defer();
            $http.get(url, config)
                .success(function (data, status) {
                    if (data !== "") {
                        factory.ListFacture = data;
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
           
        var url = urlService + "/histofactures/'" + login + "'/'" + mdp + "'";
        var config = {};
        //var deferred = $q.defer();
        $http.get(url, config)
            .success(function (data, status) {
                if (data !== "") {
                    factory.ListHistoFacture = data;
                    deferred.resolve(data);
                }
                else {
                    deferred.resolve(null);
                }
            }).error(function (error, status) {
                deferred.reject("Erreur histofactures");
            });
        return deferred.promise;
    };
                return releves;

});

