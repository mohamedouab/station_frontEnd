(function () {
    'use strict';

    angular
        .module('station-ui')
        .directive('appHeader', appHeader);

    /** @ngInject */
    function appHeader() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/header/header.html',
            controller: ['$scope', '$state', HeaderController],
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function HeaderController($scope, $state, seasonService) {

            $scope.headerName = 'Head of App';

        }
    }

})();
