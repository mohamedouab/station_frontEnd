(function () {
    'use strict';

    angular
        .module('station-ui')
        .config(config)

        .config(['$httpProvider', function ($httpProvider) {
            //$httpProvider.interceptors.push('SessionInjector');
        }])

        .config(['$httpProvider', function ($httpProvider) {
            //$httpProvider.interceptors.push('LoginInterceptor');
        }]);

    /** @ngInject */
    function config($logProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

    }

})();
