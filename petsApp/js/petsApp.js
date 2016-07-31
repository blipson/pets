angular
.module('petsApp', ['ngMaterial'])
.controller('inputController', inputController);

function inputController ($scope, $http) {
  $scope.zip = "";
  $scope.petKey = "688edd00993ee8e4c054a8e2d77b8271";
  $scope.pets = [];
  $scope.showLoadingIcon = false;

  $scope.clearName = function($scope) {
    $scope.zip = "";
  }

  $scope.getPets = function(zip) {
    $scope.showLoadingIcon = true;
    $http.jsonp("http://api.petfinder.com/pet.find?format=json&key=" + $scope.petKey + "&location=" + $scope.zip + "&callback=JSON_CALLBACK")
    .then(function(response) {
      console.log(response);
      $scope.showLoadingIcon = false;
      $scope.pets = response.data.petfinder.pets.pet;
    });

/*
    $.ajax({
      type: "GET",
      url: "http://api.petfinder.com/pet.find?format=json&key=" + $scope.petKey + "&location=" + $scope.zip + "&callback=?",
      dataType: "jsonp",
      success: function(data) {
        console.log(data.petfinder.pets.pet);
        $scope.pets = data.petfinder.pets.pet;
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
    });*/
  }
}
