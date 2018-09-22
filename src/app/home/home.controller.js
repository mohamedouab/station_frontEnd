(function () {
    'use strict';

    angular.module('station-ui')
        .controller('HomeController', ['$scope', 'HomeService','CuveService', HomeController]);

    /** @ngInject */
    function HomeController($scope, homeService,cuveService) {
        $scope.pompeForm = {
        };
        $scope.added=false;
        $scope.IsVisibleConnection=false;
        $scope.selectedPompe={
        };

        $scope.selectedCuve={
        };

        homeService.getAll(function (pompes) {
            $scope.pompes = pompes;
            $scope.IsVisible = true;
        });
        $scope.calculeClose=function()
        {
            $scope.pompesRecette =null;
        }
        $scope.loadAll=function()
        {
            homeService.getAll(function (pompes) {
                $scope.pompes = pompes;
            });
        }
        $scope.submitPompe = function() {
            homeService.add($scope.pompeForm, function (response) {
                $scope.added=true;
            });
        }
        $scope.updateIndex = function() {
            homeService.save($scope.selectedPompe, function (response) {
                alert('Index pompe '+$scope.selectedPompe.id +' modifié')
                $scope.selectedPompe={
                };
                $scope.loadAll();

            });
        }
        $scope.calculeResset = function() {
            homeService.getAllRecette(function (response) {
                $scope.pompesRecette = response;
            });
        }
        $scope.getTotal = function(){
            var total = 0;
            for(var i = 0; i < $scope.pompesRecette.length; i++){
                var pompe = $scope.pompesRecette[i];
                total += pompe.recette;
            }
            return total;
        }

        $scope.getAllCuves = function() {
            cuveService.getAll(function (cuves) {
                $scope.cuves = cuves;
                if (cuves) {
                    $scope.IsVisibleConnection=true;
                }
            });
        }

        $scope.connecter = function() {
           var request ={"idPompe":$scope.selectedPompe.id,
                          "idCuve":$scope.selectedCuve.id
           };
            homeService.connecter(request, function (response) {
                alert(' pompe '+$scope.selectedPompe.id +' connecter à la cuve '+ $scope.selectedCuve.id);
                $scope.selectedPompe={

                }
                $scope.selectedCuve={

                }
            });
        }

    }
})();
