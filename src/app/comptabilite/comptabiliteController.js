(function () {
    'use strict';

    angular.module('station-ui')
        .controller('ComptabiliteController', ['$scope', 'HomeService', ComptabiliteController]);

    /** @ngInject */
    function ComptabiliteController($scope, homeService) {

            homeService.getAllRecette(function (response) {
                $scope.pompesRecette = response;
            });

        $scope.getTotal = function(){
            var total = 0;
            for(var i = 0; i < $scope.pompesRecette.length; i++){
                var pompe = $scope.pompesRecette[i];
                total += pompe.recette;
            }
            return total;
        }
    }

})();
