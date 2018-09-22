(function () {
    'use strict';

    angular
        .module('station-ui')
        .controller('AppController', ['$scope', AppCtrl]);

    /** @ngInject */
    function AppCtrl($scope) {

        //$scope.appLocales = localeService.getLocaleCodes() ;//Object.keys(LOCALES.locales);
    }
})();