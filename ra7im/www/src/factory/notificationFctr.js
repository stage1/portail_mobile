angular.module('branchementApp').factory('notificationFctr', function ($http, $q) {
    var factory = {
        notifications: null,


        /*List des historiques notifications */
        ListHistoNotificationSelonClient: function () {
            var url = urlService + "/histonotifications/'";
            var config = {};
            //var deferred = $q.defer();
            $http.get(url, config)
                .success(function (data, status) {
                    if (data !== "") {
                        factory.notifications = data;
                        deferred.resolve(data);
                    }
                    else {
                        deferred.resolve(null);
                    }
                }).error(function (error, status) {
                    deferred.reject("Erreur histonotifications");
                });
            return deferred.promise;
        }
        /**************************************************************/
    };
    return factory;
});