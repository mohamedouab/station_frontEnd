(function () {
    'use strict';

    angular
        .module('station-ui')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .state('updatePompe', {
                url: '/',
                templateUrl: 'app/home/updatePompe.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .state('home-base', {
                url: '',
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })

            .state('cuve', {
                url: '/cuve',
                templateUrl: 'app/cuve/cuve.html',
                controller: 'CuveController',
                controllerAs: 'cuve'
            })
            .state('comptabilite', {
                url: '/comptabilite',
                templateUrl: 'app/comptabilite/comptabilite.html',
                controller: 'ComptabiliteController',
                controllerAs: 'comptabilite'
            })

            .state('depotage', {
            url: '/depotage',
            templateUrl: 'app/cuve/depotage.html',
            controller: 'DepotageController',
            controllerAs: 'depotage'
        }).state('historiquePompe', {
            url: '/historiquePompe',
            templateUrl: 'app/home/historiqueIndex.html',
            controller: 'HistoriquePompeController',
            controllerAs: 'HistoriquePompeController'
        })
            .state('404', {
                url: '/404',
                template: "<h1 style='text-align: center'>Page not found !</h1>"
            });

        $urlRouterProvider.otherwise('/404');
    }

})();
