(function () {
    'use strict';

    angular.module('station-ui')
        .controller('HistoriquePompeController', ['$scope', 'HomeService', HistoriquePompeController]);

    /** @ngInject */
    function HistoriquePompeController($scope, homeService) {

        homeService.getAllHistory(function (pompes) {
            $scope.pompes = pompes;
            $scope.IsVisible = true;
        });

    }

})();