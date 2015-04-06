/**
 * 
 */
	var app=angular.module("MainApp");

	app.controller("AfiliadosAdmController",function($scope,
													afiliadosFactory,
													gruposFactory){
		/*
		 * Initiallization
		 * */
		$scope.afiliados = {};
		$scope.grupos = {};
		
		afiliadosFactory.getAfiliados().success(function(data){
			$scope.afiliados=data;
		}).error(function(data){
			$scope.afiliados={};
		});
		
		gruposFactory.getGrupos().success(function(data){
			$scope.grupos=data;
		}).error(function(data){
			$scope.grupos={};
		});
		/*
		 * End initialization
		 */
		
	});
