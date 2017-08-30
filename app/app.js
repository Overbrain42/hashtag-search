'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute'
]).config(['$locationProvider', '$routeProvider', '$httpProvider', function ($locationProvider, $routeProvider, $httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
