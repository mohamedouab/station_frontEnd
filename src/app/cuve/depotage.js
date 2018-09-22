(function () {
    'use strict';

    angular.module('station-ui')
        .controller('DepotageController', ['$scope', 'CuveService', DepotageController]);

    /** @ngInject */
    function DepotageController($scope, cuveService) {

        cuveService.getAll(function (cuves) {
            $scope.cuves = cuves;
        });
        $scope.depot={
        }

        $scope.deposer = function() {
            cuveService.deposer($scope.depot, function (response) {
                alert($scope.depot.quantite+' Litres a été mis dans la cuve numéro '+$scope.depot.idCuve);
            });
        }
    }

})();
