angular
.module('petsApp', ['ngMaterial'])
.controller('inputController', inputController);

function inputController ($scope) {
  $scope.userName = "";
  $scope.clearName = function() {
    $scope.userName = "";
  }
}
