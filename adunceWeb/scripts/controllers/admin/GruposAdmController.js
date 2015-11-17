
var app = angular.module("MainApp");

app.controller("GruposAdmController", function($scope, gruposFactory){
	
	
	$scope.grupos = {};
	$scope.activeGrupo = {};
	$scope.msg = {
			'saveE' : 'Se produjo un error al agregar un nuevo grupo',
			'saveS': 'Se agregó con éxito el nuevo grupo',
			'getE' : 'Se produjo un error al listar los grupos',
	}
	$scope.actualMsg;

	$scope.getGrupos = function(){
		gruposFactory.getGrupos().success(function(data){
			$scope.grupos = data;
		}).error(function(data){
			$scope.grupos = {};
		})
	}

	
	$scope._dataSaved = function(){
		$scope.actualMsg = $scope.msg.saveS;
		$scope.success = true;
		$scope.status = 'success';
	}
	
	$scope._dataNotSaved = function(){
		$scope.actualMsg = $scope.msg.saveE;
		$scope.status = 'showMSG';
	}
	
	$scope.addGrupo = function(){
		if (gruposFactory.isEditModeOn()){
			gruposFactory.editModeOff();
			gruposFactory.saveGrupo($scope.newGrupo).success(function(data, textStatus){
				
				if (textStatus == '200'){
					$scope._dataSaved();
					delete $scope.$parent.newGrupo;
				} else{
					$scope._dataNotSaved();
				}
				
				$scope.$broadcast('showMSG');
				
			}).error(function(data){
				alert(data+ ' : Se produjo un error al realizar la petición');
				
			})
		} else{
			gruposFactory.addGrupo($scope.newGrupo).success(function(data, textStatus){
				
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
		$scope.newGrupo = {};
	}
	
	$scope.removeGrupo = function(index){ 
		gruposFactory.removeGrupo($scope.grupos[index].shortname).success(function(){
			$scope.grupos.splice(index, 1);
		}).error(function(){
			alert(data+ ' : Se produjo un error al realizar la petición');
		})
		 
	}
	
	$scope.editGrupo = function(index){ 
		gruposFactory.getGrupo($scope.grupos[index].shortname).success(function(data){
			
			$scope.$parent.newGrupo = {};
			$scope.$parent.newGrupo = data;
			gruposFactory.editModeOn();
			
			$scope.showSection('EditarGrupos');
			
		}).error( function(){
			alert(data+ ' : Se produjo un error al realizar la petición');
		})
	}

	if ($scope.$parent.newGrupo != undefined){
		$scope.newGrupo = $scope.$parent.newGrupo;
	} 
	
})