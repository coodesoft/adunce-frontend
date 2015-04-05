/**
 * 
 */
	var app=angular.module("MainApp");

	app.controller("AfiliadosAdmController",function($scope,afiliadosFactory){
		/*
		 * Initiallization
		 * */
		$scope.afiliados = {};
		
		afiliadosFactory.getAfiliados().success(function(data){
			$scope.afiliados=data;
		});
		
		/*
		 * End initialization
		 */
		

	});
