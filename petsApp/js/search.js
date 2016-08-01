(function () {
  'use strict';

  var app = angular.module('petsApp');
  app.controller('searchController', searchController);

  function searchController ($scope, $rootScope, $http, $routeParams) {
    $rootScope.bodyStyle = {};
    $scope.zip = $routeParams.zip;
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

    $scope.getPets($scope.zip);
  }
}());
