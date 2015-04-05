(function(){
	
	var app = angular.module('MainApp');
	
	app.controller('AdminController', function($scope, afiliados){
		
		$scope.visibility = true;
		
		$scope.showMenu = false;
		
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
	    	afiliados.getAfiliados().success(function(data){
	    		$scope.afiliados = data;
	    	});
	    };
	    
	});
	
	app.directive("afiliadosList",function(){
		
		return {
			restrict: 'E',
			templateUrl: 'views/adminPartials/list_afiliados.html',
			controller: 'AfiliadosAdmController'
		};
		
	});

})