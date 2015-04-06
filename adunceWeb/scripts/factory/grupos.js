var app = angular.module('MainApp');
app.factory('gruposFactory', ['$http', function($http){
	
	var gruposFactory = {};
	
	gruposFactory.getGrupos = function(){
		return $http.get(app.server + '/REST/grupos')
	};
	
	return gruposFactory;
}])