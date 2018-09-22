(function() {
  'use strict';

  angular
    .module('station-ui')
    .directive('appFooter', footer);

  /** @ngInject */
  function footer() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    //function FooterController(SessionService, LoginService, $scope) {
    function FooterController($scope) {

      /*$scope.isLoaded = false;

      if (!SessionService.isAuthenticated() && SessionService.hasToken()) {

        LoginService.authByCookieToken(function (company) {
          SessionService.setCompany(company);
          $scope.isLoaded = true;
        });
      }else{
        $scope.isLoaded = true;
      }

      $scope.isAuthenticated = SessionService.isAuthenticated;
      $scope.isAnonymous = SessionService.isAnonymous;*/

    }
  }

})();
