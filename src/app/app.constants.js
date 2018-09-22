/* global malarkey:false, moment:false */
(function () {
    'use strict';

    angular
        .module('station-ui')
        .constant('LOCALES', {
            'locales': {
                'zh_CN': '中国',
                'fr_FR': 'Français',
                'en_GB': 'English'
            },
            'preferredLocale': 'en_GB'
        });
})();
