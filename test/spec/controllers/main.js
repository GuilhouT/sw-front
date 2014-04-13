'use strict';

describe('Controller: MainCtrl', function () {

  var location,
      scope;

  beforeEach(module('swFrontApp'));

  beforeEach(inject(function($controller, $rootScope, $location) {
    location = $location;
    scope = $rootScope.$new();
    $controller('NavigationController', {
      $scope: scope
    });
  }));

  describe('isActive', function () {
    it('should return true when paths match', function () {
      location.path('/test');
      expect(scope.isActive('/test')).toBeTruthy();
    });

    it('should return false when paths are different', function () {
      location.path('/different');
      expect(scope.isActive('/test')).toBeFalsy();
    });

    it('should return true when paths start with same word', function () {
      location.path('/test/1/show');
      expect(scope.isActive('/test')).toBeTruthy();
    });

    it('should return true when paths start with same word followed by query string', function () {
      location.path('/test?id=1');
      expect(scope.isActive('/test')).toBeTruthy();
    });
  });

});
