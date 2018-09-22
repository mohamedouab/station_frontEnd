(function () {
    'use strict';

    angular
        .module('station-ui')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {
        $log.debug('station-ui run block end');
    }

})();
