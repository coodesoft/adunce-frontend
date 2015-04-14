/**
 * 
 */
	var app=angular.module("MainApp");

	app.controller("AfiliadosAdmController",function($scope,
													afiliadosFactory,
													gruposFactory){
		/*
		 * Initiallization
		 * */
		$scope.afiliados = {};
		$scope.grupos = {};
		$scope.newAfiliado = {};
		$scope.newAfiliado.hijos = [];
		$scope.newAfiliado.grupos = [];
		$scope.newHijo = {};
		$scope.sexoOpts=[
		                 	{
		                 		"id":"masculino",
		                 		"value":"Masculino"
		                 	},
		                 	{
		                 		"id":"femenino",
		                 		"value":"Femenino"
		                 	}
		                 ];
		
		$scope.addHijo = function(){
			$scope.newAfiliado.hijos.push($scope.newHijo);
			$scope.newHijo = {};
		}
		
		$scope.removeHijo = function(index){
			$scope.newAfiliado.hijos.splice(index,1);
		}
		
		afiliadosFactory.getAfiliados().success(function(data){
			$scope.afiliados=data;
		}).error(function(data){
			$scope.afiliados={};
		});
		
		gruposFactory.getGrupos().success(function(data){
			$scope.grupos=data;
		}).error(function(data){
			$scope.grupos={};
		});
		
		$scope.addAfiliado = function(){
			alert($scope.newAfiliado.username)
			afiliadosFactory.addAfiliado($scope.newAfiliado).success(function(data){
				alert("OK");
			}).error(function(data){
				alert("Error");
			});
			$scope.newAfiliado = {};
		};
		/*
		 * End initialization
		 */
		//$('select').select2();
		
		$scope.today = function() {
			$scope.newHijo.fechaNacimiento = new Date();
			$scope.dt = new Date();
		  };
		  

		  $scope.clear = function () {
		    $scope.newHijo.fechaNacimiento = null;
		  };

		  // Disable weekend selection
		  $scope.disabled = function(date, mode) {
		    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
		  };

		  $scope.toggleMin = function() {
		    $scope.minDate = $scope.minDate ? null : new Date();
		  };
		  $scope.toggleMin();

		  $scope.open = function($event) {
		    //$event.preventDefault();
		    $event.stopPropagation();

		    $scope.opened = true;
		  };

		  $scope.dateOptions = {
		    formatYear: 'yy',
		    startingDay: 1
		  };

	});
