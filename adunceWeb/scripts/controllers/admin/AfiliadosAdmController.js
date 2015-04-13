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
		$scope.newAfiliado = {};
		
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
		
		$scope.addAfiliado = function(){
			alert($scope.newAfiliado.username)
			afiliadosFactory.addAfiliado($scope.newAfiliado).success(function(data){
				alert("OK");
			}).error(function(data){
				alert("Error");
			});
			$scope.newAfiliado = {};
		};
		/*
		 * End initialization
		 */
		$('select').select2();
	});
