'use strict';

angular.module('swFrontApp')
  .controller('NavigationController', function ($scope, $location) {

    $scope.isActive = function (path) {
      return ($location.path() === path);
    };

  });
