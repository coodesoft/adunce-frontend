	
	var app = angular.module('MainApp');
	
	app.controller('AdminController', function($scope, afiliadosFactory){
		
		$scope.visibility = true;
		
		$scope.showMenu = true;
		
		$scope.initDash = function(){
			$scope.sections = [
			         { 'name': 'Afiliados',
			           'icon': 'glyphicon glyphicon-user',
			           'actions' : [
			                        { 'name' : 'Listar', 'icon':'glyphicon glyphicon-align-justify' },
			                        { 'name' : 'Agregar', 'icon':'' },
			                        { 'name' : 'Borrar', 'icon':'' },
			                        ] 
			        },
			        { 'name': 'Servicios',
			          'icon': 'glyphicon glyphicon-flash',
				       'actions' : [
				                    { 'name' : 'Listar','icon':'glyphicon glyphicon-align-justify'  },
				                    ] 
				    },
				    {
				      'name': 'Grupos',
				      'icon': 'glyphicon glyphicon-user',
				      'actions' : [
				                	   {'name' : 'Listar', 'icon':'glyphicon glyphicon-align-justify'},
				                	   {'name' : 'Agregar'},
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

	    $scope.listAfiliados = function(){
	    	afiliadosFactory.getAfiliados().success(function(data){
	    		$scope.afiliados = data;
	    	});
	    };
	    
	});
	
	
