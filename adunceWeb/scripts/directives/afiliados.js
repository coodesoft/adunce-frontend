

var app = angular.module('MainApp');


app.directive("afiliadosList",function(){
	
	return {
		restrict: 'E',
		templateUrl: 'views/adminPartials/list_afiliados.html',
		controller: 'AfiliadosAdmController',
		controllerAs: 'afAdmin'
	};
	
});

app.directive("addAfiliado",function(){
	
	return {
		restrict: 'E',
		templateUrl: 'views/adminPartials/add_afiliados.html',
		controller: "AfiliadosAdmController",
		controllerAs: 'afAdmin'
	};
});