(function () {
  'use strict';

  var app = angular.module('petsApp');
  app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default').foregroundPalette[3] = "rgba(102,102,178,1)";
  })
  .controller('indexController', indexController);

  function indexController ($scope, $rootScope, $http, $window) {
    $rootScope.bodyStyle = {
        'background-image': 'url("../img/bckgrd.jpg")',
        'background-repeat': 'no-repeat',
        'background-attachment': 'fixed',
        'background-size': 'cover'
    };
    $scope.zip = "";

    $scope.go = function ( path ) {
      $window.location.href = path + $scope.zip;
    };
  }
}());
