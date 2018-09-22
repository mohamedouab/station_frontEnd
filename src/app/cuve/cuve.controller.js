(function () {
    'use strict';

    angular.module('station-ui')
        .controller('CuveController', ['$scope', '$state', '$stateParams', 'CuveService', CuveController]);

    /** @ngInject */
    function CuveController($scope, $state, $stateParams, cuveService) {

        $scope.cuveForm = {
        };
        $scope.added=false;
        cuveService.getAll(function (cuves) {
            $scope.isVisiblesVisible = false;
            $scope.cuves = cuves;
            if(cuves) {
                $scope.isVisible = true;
            }
        });

        $scope.submitCuve = function() {
            cuveService.add($scope.cuveForm, function (response) {
                //$stateProvider.go('home');
                //$state.go('cuve-edit', {idCuve:'10'});
                $scope.added=true;
            });
        }
    }
})();
