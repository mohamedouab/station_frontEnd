'use strict';

angular.module('station-ui')
    .factory('CuveApi', ['$http', 'BASE_URL', cuveApi]);

function cuveApi($http, BASE_URL) {

    var BASE_URL_SELF = BASE_URL + '/rest/cuve';

    return {

        getAll: function () {
            return $http.get(BASE_URL_SELF+'/all');
        },

        getOne: function (id) {
            return $http.get(BASE_URL_SELF + id + '/');
        },

        addOne: function (cuve) {
            //console.debug($http.post(BASE_URL_SELF, pompe));
            return $http.post(BASE_URL_SELF, cuve);
        },

        saveOne: function (brand) {
            return $http.put(BASE_URL_SELF + brand.id + '/', brand);
        },

        deleteOne: function (id) {
            return $http.delete(BASE_URL_SELF + id + '/');
        },
        deposer: function (cuve) {
            //console.debug($http.post(BASE_URL_SELF, pompe));
            return $http.put(BASE_URL_SELF+'/depotage', cuve);
        },
    }
}
