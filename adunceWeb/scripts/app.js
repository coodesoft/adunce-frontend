'use strict';
/**
 * @ngdoc overview
 * @name adunceApp
 * @description
 * # adunceApp
 *
 * Main module of the application.
 */

angular.module('adunceApp', [
          'ngResource',
          'ngRoute'
       ]).config(function($routeProvider){
    	   $routeProvider
    	   	.when('/admin', {
    	   		templateUrl: 'views/admin.html',
    	   		controller: 'AdminController'
    	   	})
       })