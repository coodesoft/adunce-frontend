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
                                     'ui.select',
                                     'ngCsvImport'
                                  ]);
app.server = "http://localhost:8080/gestion"

app.tpl = {
		'afiliados' : 'views/adminPartials/afiliados/',
		'servicios' : 'views/adminPartials/servicios/',
		'components': 'views/adminPartials/components/',
		'grupos'	: 'views/adminPartials/grupos/',
}

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
    	   	});
         $routeProvider.when('/', {
    	   		templateUrl: 'views/login.html',
    	   		controller: 'UserController',
    	   		controllerAs: 'user'
    	   	});
    	 $routeProvider.when('/user', {
    		 templateUrl: 'views/user.html',
    		 controller: 'UserController',
    		 controllerAs: 'user'
    	 })
       });
