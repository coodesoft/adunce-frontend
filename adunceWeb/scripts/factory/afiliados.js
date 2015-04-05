
angular.module('MainApp').factory('afiliadosFactory', ['$http', function($http){
	
	var afiliadosFactory = {};
	
	afiliadosFactory.getAfiliados = function(){
		return $http.get('http://dev.coodesoft.com.ar:8080/adunce/REST/afiliados')
	};
	
	return afiliadosFactory;
}])