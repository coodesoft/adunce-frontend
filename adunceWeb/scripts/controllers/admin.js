
angular.module('MainApp').controller('AdminController', function($scope, afiliados){
	
	$scope.visibility = true;
	
	$scope.showMenu = false;
	
	$scope.initDash = function(){
		$scope.title = 'Acciones';
		$scope.sections = [
		         { 'name': 'Afiliados',
		           'actions' : [
		                        { 'name' : 'Listar' },
		                        { 'name' : 'Agregar' },
		                        { 'name' : 'Borrar' },
		                        ] 
		        },
		        { 'name': 'Servicios',
			       'actions' : [
			                    { 'name' : 'Listar' },
			                    ] 
			    },
		        
		     ];
	}
	
	$scope.showSection = function(section){
		$scope.activeSection = section;
	}
	
	$scope.includeSection = function(section){
		return "views/adminPartials/"+section+".html";
	}
	
	$scope.showActions = function() {
        $scope.visibility = $scope.visibility === false ? true: false;
    };
    
    $scope.listAfiliados = function(){
    	afiliados.getAfiliados().success(function(data){
    		$scope.afiliados = data;
    	});
    }
})