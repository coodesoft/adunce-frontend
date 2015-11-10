var app = angular.module('MainApp');

app.factory('gruposFactory', ['$http', function($http){
	
	var gruposFactory = {};
	
	gruposFactory._editMode = false;
	
	gruposFactory._url = app.server + '/REST/grupos';
	
	gruposFactory.editModeOn = function(){
		gruposFactory._editMode = true;
	}
	
	gruposFactory.editModeOff = function(){
		gruposFactory._editMode = false;
	}
	
	gruposFactory.isEditModeOn = function(){
		return gruposFactory._editMode;
	}
	
	
	gruposFactory.getGrupos = function(){
		return $http.get(gruposFactory._url)
	};
	
	gruposFactory.getGrupo = function(name){
		return $http.get(gruposFactory._url + '/' + name);
	}
	
	gruposFactory.addGrupo = function(grupo){
		return $http.post(gruposFactory._url, grupo);
	}
	
	gruposFactory.saveGrupo = function(grupo){
		return $http.put(gruposFactory._url, grupo);
	}
	
	gruposFactory.removeGrupo = function(grupo){
		return $http.delete(gruposFactory._url + '/' + grupo);
	}
	
	return gruposFactory;
}])