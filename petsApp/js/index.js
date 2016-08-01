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
    $scope.petKey = "688edd00993ee8e4c054a8e2d77b8271";
    $scope.pets = [];
    $scope.showLoadingIcon = false;

    $scope.getPets = function(zip) {
      $scope.showLoadingIcon = true;
      $http.jsonp("http://api.petfinder.com/pet.find?format=json&key=" + $scope.petKey + "&location=" + $scope.zip + "&callback=JSON_CALLBACK")
      .then(function(response) {
        console.log(response);
        $scope.showLoadingIcon = false;
        $scope.pets = response.data.petfinder.pets.pet;
      });
    }

    $scope.go = function ( path ) {
      $window.location.href = path + $scope.zip;
    };
  }
}());
