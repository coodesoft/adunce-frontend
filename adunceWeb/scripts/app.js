'use strict';
/**
 * @ngdoc overview
 * @name adunceApp
 * @description
 * # adunceApp
 *
 * Main module of the application.
 */
var app = angular.module('MainApp', [
                                     'ngResource',
                                     'ngRoute',
                                     'ui.bootstrap',
                                     'ngSanitize',
                                     'ui.select'
                                  ]);
app.server = "http://localhost:8080/gestion"
	
app.config(function($routeProvider){
    	   $routeProvider
    	   	.when('/admin', {
    	   		templateUrl: 'views/admin.html',
    	   		controller: 'AdminController',
    	   		controllerAs: 'admin'
    	   	});
    	   $routeProvider.when('/alta', {
    	   		templateUrl: 'views/admin.html',
    	   		controller: 'AdminController',
    	   		controllerAs: 'admin'
    	   	})
       });
