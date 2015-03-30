
angular.module('MainApp').factory('afiliados', ['$http', function($http){
	
	var afiliados = {};
	
	afiliados.getAfiliados = function(){
		return $http.get('http://dev.coodesoft.com.ar:8080/adunce/REST/afiliados')
	};
	
	return afiliados;
}])