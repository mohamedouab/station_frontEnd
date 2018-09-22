'use strict';

angular.module('station-ui')
    .factory('HomeApi', ['$http', 'BASE_URL', homeApi]);

function homeApi($http, BASE_URL) {

    var BASE_URL_SELF = BASE_URL + '/rest/pompe';

    return {

        getAll: function () {
            return $http.get(BASE_URL_SELF+'/all');
        },
        getAllRecette : function () {
            return $http.get(BASE_URL_SELF+'/calculate');
        },

        getOne: function (id) {
            return $http.get(BASE_URL_SELF + id + '/');
        },

        addOne: function (pompe) {
            //console.debug($http.post(BASE_URL_SELF, pompe));
            return $http.post(BASE_URL_SELF, pompe);
        },
        connecter: function (request) {
            //console.debug($http.post(BASE_URL_SELF, pompe));
            return $http.put(BASE_URL_SELF + "/connection" + '/', request);
        },

        saveOne: function (pompe) {
            return $http.put(BASE_URL_SELF + "/updateIndex" + '/', pompe);
        },

        deleteOne: function (id) {
            return $http.delete(BASE_URL_SELF + id + '/');
        },
        getAllHistory: function () {
            return $http.get(BASE_URL_SELF+'/allHistory');
        }
    }
}
