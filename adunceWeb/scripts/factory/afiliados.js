
var app = angular.module('MainApp');

app.factory('afiliadosFactory', ['$http', function($http){
	
	var afiliadosFactory = {};
	
	afiliadosFactory.getAfiliados = function(){
		return $http.get(app.server + '/REST/afiliados')
	};
	
	afiliadosFactory.addAfiliado = function(afiliado){
		return $http.post(app.server+'/REST/afiliados',afiliado);
	};
	
	afiliadosFactory.removeAfiliado = function(afiliado){
		return $http.delete(app.server+'/REST/afiliados/'+afiliado.username);
	};
	
	return afiliadosFactory;
}])