
var app = angular.module('MainApp');

app.factory('afiliadosFactory', ['$http', function($http){
	
	var afiliadosFactory = {};
	
	afiliadosFactory.getAfiliados = function(){
		return $http.get(app.server + '/REST/afiliados')
	};
	
	return afiliadosFactory;
}])