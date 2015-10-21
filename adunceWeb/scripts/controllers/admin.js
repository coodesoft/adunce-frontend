
	var app = angular.module('MainApp');

	app.controller('AdminController', function($scope, afiliadosFactory){

		$scope.sections = {
				'Afiliados': {
			        'icon': 'glyphicon glyphicon-user',
			        'actions' : [
			                     { 'name' : 'Listar', 'icon':'glyphicon glyphicon-align-justify' },
			                     { 'name' : 'Agregar', 'icon':'glyphicon glyphicon-plus' },
			                    ],
			        'status': 'active',
				},
				'Servicios': { 
			        'icon': 'glyphicon glyphicon-flash',
				    'actions' : [
				                 { 'name' : 'Listar','icon':'glyphicon glyphicon-align-justify'  },
				                 ],
			        'status': '',
				 },
				'Grupos':  {
				    'icon': 'glyphicon glyphicon-user',
				    'actions' : [
				              	   { 'name' : 'Listar', 'icon':'glyphicon glyphicon-align-justify' },
				              	   { 'name' : 'Agregar', 'icon':'glyphicon glyphicon-plus' },
					                 { 'name' : 'Borrar', 'icon':'glyphicon glyphicon-minus' },
				                 ],
				    'status': ''			    
				 },
		};
				
		$scope.changeSectionStatus = function(key){

			if ($scope.sections[key].status == 'active')
				$scope.sections[key].status = '';
			else
				$scope.sections[key].status = 'active';	

			for(var section in $scope.sections){
				if (section != key){
					if ($scope.sections[section].status == 'active')
						$scope.sections[section].status = '';
				}
			}
		}
		
		
		$scope.showSection = function(section){
			$scope.activeSection = section;
		};

		var self = this;

		$scope.includeSection = function(section){
			return "views/adminPartials/"+section+".html";
		};

	    $scope.listAfiliados = function(){
	    	afiliadosFactory.getAfiliados().success(function(data){
	    		$scope.afiliados = data;
	    	});
	    };
	    
});
