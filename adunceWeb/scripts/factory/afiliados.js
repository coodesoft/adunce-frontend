
var app = angular.module('MainApp');

app.factory('afiliadosFactory', ['$http', function($http){

	var afiliadosFactory = {};

	afiliadosFactory._editMode = false;

	afiliadosFactory._url = app.server + '/REST/afiliados';

	afiliadosFactory.editModeOn = function(){
		afiliadosFactory._editMode = true;
	};

	afiliadosFactory.editModeOff = function(){
		afiliadosFactory._editMode = false;
	}

	afiliadosFactory.isEditModeOn = function(){
		return afiliadosFactory._editMode;
	}


	afiliadosFactory.getAfiliados = function(){
		return $http.get(afiliadosFactory._url)
	};

	afiliadosFactory.getAfiliado = function(username){
		return $http.get(afiliadosFactory._url + '/'+username)
	};

	afiliadosFactory.addAfiliado = function(afiliado){
		return $http.post(afiliadosFactory._url,afiliado);
	};

	afiliadosFactory.saveAfiliado = function(afiliado){
		return $http.put(afiliadosFactory._url,afiliado);
	};

	afiliadosFactory.removeAfiliado = function(afiliado){
		return $http.delete(afiliadosFactory._url+'/'+afiliado.username);
	};

	afiliadosFactory.massiveLoadAfiliados = function(afiliados){
		return $http.post(afiliadosFactory._url+'/massiveLoad',afiliados);
	};

	return afiliadosFactory;
}]);
