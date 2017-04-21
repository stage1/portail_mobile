angular.module('branchementApp').factory('notificationFctr', function ($http, $q) {
    var factory = {
        compte: null,
        ffff: 'll',
        ListHistoNotificationSelonClient: function (idCli) {
            var notifications = [{
                reference: 'FR147',
                classement: '123',
                message: 'reclamation rejet',
                etat: 'lu'

            }, {
                reference: 'FR147',
                classement: '123',
                message: 'prestation validé',
                etat: 'lu'
            }, {
                reference: 'FR147',
                classement: '123',
                message: 'manque des fichiers',
                etat: 'lu'
            }, {
                reference: 'FR147',
                classement: '123',
                message: '',
                etat: 'Non lu'
            }, {
                reference: 'FR147',
                classement: '123',
                message: 'N°12',
                etat: 'Non lu'
            }


            ];
            return notifications;
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