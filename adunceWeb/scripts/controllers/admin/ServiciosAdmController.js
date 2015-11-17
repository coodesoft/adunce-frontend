

var app = angular.module('MainApp');

app.controller("ServiciosAdmController", function($scope, serviciosFactory){
	
	$scope.servicios = {};
	$scope.activeServicio = {};
	/* esto se va a sacar a la mierda de los controladores y se va 
	 * a meter en algun service para ser usado
	 */
	
	
	if ($scope.$parent.newServicio != undefined){
		$scope.newServicio = $scope.$parent.newServicio;
	} 
	
	
	$scope.msg = {
			'saveE' : 'Se produjo un error al agregar un nuevo grupo',
			'saveS': 'Se agregó con éxito el nuevo grupo',
			'getE' : 'Se produjo un error al listar los grupos',
	}
	
	$scope.actualMsg;
	$scope.previewUrl;

	$scope._dataSaved = function(){
		$scope.actualMsg = $scope.msg.saveS;
		$scope.success = true;
		$scope.status = 'success';
	}
	
	$scope._dataNotSaved = function(){
		$scope.actualMsg = $scope.msg.saveE;
		$scope.status = 'showMSG';
	}
	
	$scope.getServicios = function(){
		serviciosFactory.getServicios().success(function(data){
			$scope.servicios = data;
		}).error(function(data){
			$scope.servicios = {};
		})
	}

	
	$scope.addServicio = function(){
		if(serviciosFactory.isEditModeOn()){
			serviciosFactory.editModeOff()
			serviciosFactory.saveServicio($scope.newServicio).success(function(data, textStatus){
				
				if (textStatus == '200'){
					$scope._dataSaved();
					delete $scope.$parent.newServicio;
				} else
					$scope._dataNotSaved();
				
				$scope.$broadcast('showMSG');
			}).error(function(data){
				alert(data+ ' : Se produjo un error al realizar la petición');
			})
		} else{
			serviciosFactory.addServicio($scope.newServicio).success(function(data, textStatus){
				if (textStatus == '200'){
					$scope._dataSaved();
				} else{
					$scope._dataNotSaved();
				}
				
				$scope.$broadcast('showMSG');
			}).error(function(data){
				alert(data+ ' : Se produjo un error al realizar la petición');
			})
		}
		$scope.newServicio = {};
	}
	
	$scope.removeServicio = function(index){
		serviciosFactory.removeServicio($scope.servicios[index].codigo).success(function(){
			$scope.servicios.splice(index, 1);
		}).error(function(){
			alert(data+ ' : Se produjo un error al realizar la petición');
		})
	}
	
	$scope.editServicio = function(index){
		serviciosFactory.getServicio($scope.servicios[index].codigo).success(function(data){
			$scope.$parent.newServicio = {};
			$scope.$parent.newServicio = data;
			serviciosFactory.editModeOn();
		}).error( function(){
			alert(data+ ' : Se produjo un error al realizar la petición');
		})
	}
});