var app = angular.module('MainApp');

app.factory('serviciosFactory', ['$http', function($http){
	
	var serviciosFactory = {};
	
	serviciosFactory._editMode = false;
	
	serviciosFactory._url = app.server + '/REST/servicios';
	
	serviciosFactory.editModeOn = function(){
		serviciosFactory._editMode = true;
	}
	
	serviciosFactory.editModeOff = function(){
		serviciosFactory._editMode = false;
	}
	
	serviciosFactory.isEditModeOn = function(){
		return serviciosFactory._editMode;
	}
	
	
	serviciosFactory.getServicios = function(){
		return $http.get(serviciosFactory._url)
	};
	
	serviciosFactory.getServicio = function(name){
		return $http.get(serviciosFactory._url + '/' + name);
	}
	
	serviciosFactory.addServicio = function(servicio){
		return $http.post(serviciosFactory._url, servicio);
	}
	
	serviciosFactory.saveServicio = function(servicio){
		return $http.put(serviciosFactory._url, servicio);
	}
	
	serviciosFactory.removeServicio = function(servicio){
		return $http.delete(serviciosFactory._url + '/' + servicio);
	}
	
	return serviciosFactory;
}])