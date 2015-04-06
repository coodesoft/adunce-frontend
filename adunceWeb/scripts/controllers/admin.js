	
	var app = angular.module('MainApp');
	
	app.controller('AdminController', function($scope, afiliadosFactory){
		
		$scope.visibility = true;
		
		$scope.showMenu = true;
		
		$scope.initDash = function(){
			$scope.title = 'Acciones';
			$scope.sections = [
			         { 'name': 'Afiliados',
			           'actions' : [
			                        { 'name' : 'Listar', icon:'glyphicon glyphicon-align-justify' },
			                        { 'name' : 'Agregar', icon:'' },
			                        { 'name' : 'Borrar', icon:'' },
			                        ] 
			        },
			        { 'name': 'Servicios',
				       'actions' : [
				                    { 'name' : 'Listar' },
				                    ] 
				    },
			        
			     ];
		};
		
		$scope.showSection = function(section){
			$scope.activeSection = section;
		};
		
		$scope.includeSection = function(section){
			return "views/adminPartials/"+section+".html";
		};
		
		$scope.showActions = function() {
	        $scope.visibility = $scope.visibility === false ? true: false;
	    };
	    
	    $scope.listAfiliados = function(){
	    	afiliadosFactory.getAfiliados().success(function(data){
	    		$scope.afiliados = data;
	    	});
	    };
	    
	});
	
app.directive("addAfiliado",function(){
		
		return {
			restrict: 'E',
			templateUrl: 'views/adminPartials/add_afiliados.html',
			controller: 'AfiliadosAdmController',
			controllerAs: 'afAdmin'
		};
	});
	
	app.directive("afiliadosList",function(){
		
		return {
			restrict: 'E',
			templateUrl: 'views/adminPartials/list_afiliados.html',
			controller: 'AfiliadosAdmController',
			controllerAs: 'afAdmin'
		};
		
	});
	