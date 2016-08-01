(function () {
  'use strict';
  angular.module('petsApp', ['ngMaterial', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    // route for the home page
    .when('/', {
      templateUrl : 'templates/main.html',
      controller  : 'indexController'
    })

    // route for the about page
    .when('/search/:zip', {
      templateUrl : 'templates/search.html',
      controller  : 'searchController'
    });
  }])
})();
