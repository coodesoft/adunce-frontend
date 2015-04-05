/**
 * 
 */
(function(){

	var app=angular.module("MainApp");

	app.controller("AfiliadosAdmController",function(afiliados){
		
		afiliados.getAfiliados().success(function(data){
			$scope.afiliados=data;
		});
		
		
		
	});


});