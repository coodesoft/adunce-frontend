/**
 *
 */
	var app=angular.module("MainApp");

	app.controller("AfiliadosAdmController",function($scope, afiliadosFactory,gruposFactory){
		/*
		 * Initiallization
		 * */
		$scope.edit = angular.isDefined($scope.edit) ? $scope.edit : false;

		$scope.afiliados = {};
		$scope.activeAfiliado = {};
		$scope.grupos = {};
		$scope.newAfiliado = {};
		$scope.newAfiliado.hijos = [];
		$scope.newAfiliado.grupos = [];
		$scope.newHijo = {};
		$scope.sexoOpts=[
		                 	{
		                 		"id":"MASCULINO",
		                 		"value":"Masculino",
		                 	},
		                 	{
		                 		"id":"FEMENINO",
		                 		"value":"Femenino",
		                 	}
		                 ];

		$scope.addHijo = function(){
			$scope.newHijo.pariente = $scope.newAfiliado.username;
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
			if(afiliadosFactory.isEditModeActive()){
				afiliadosFactory.deactivateEditMode();
				afiliadosFactory.saveAfiliado($scope.newAfiliado).success(function(data){
					console.log(data);
				}).error(function(data){
					//alert("Error");
				});
			} else{
				afiliadosFactory.addAfiliado($scope.newAfiliado).success(function(data){
					//$scope.cargarAfiliados();
				}).error(function(data){
					alert(data);
				});
			}
			$scope.newAfiliado = {};
		};

		$scope.removeAfiliado = function(index){
			afiliadosFactory.removeAfiliado($scope.afiliados[index]).success(function(data){
				$scope.afiliados.splice(index,1);
			}).error(function(data){
				//alert("Error");
			});

		};

		actualizarAfiliado = function(afiliado){
			$scope.newAfiliado=afiliado;
			if ($scope.newAfiliado.hijos ==null)
				$scope.newAfiliado.hijos = [];
			if ($scope.newAfiliado.grupos ==null)
				$scope.newAfiliado.grupos = [];
		}

		$scope.editAfiliado = function(index){
			afiliadosFactory.getAfiliado($scope.afiliados[index].username).success(function(data){
				actualizarAfiliado(data);
				// $scope.activeAfiliado=data;
				// $scope.edit=true;
				afiliadosFactory.activateEditMode();
				$scope.showSection('EditarAfiliados');
			}).error(function(data){
				//alert("Error");
			});
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
