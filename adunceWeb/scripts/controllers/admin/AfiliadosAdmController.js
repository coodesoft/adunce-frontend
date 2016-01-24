/**
 *
 */
	var app=angular.module("MainApp");

	app.controller("AfiliadosAdmController",function($scope, afiliadosFactory,gruposFactory){
		/*
		 * Initiallization
		 * */
		$scope.edit = angular.isDefined($scope.edit) ? $scope.edit : false;

		$scope.visual = {};

		$scope.csv = {
			content: null,
			header: true,
			headerVisible: false,
			separator: ',',
			separatorVisible: true,
			result: null,
			encoding: 'ISO-8859-1',
			encodingVisible: true,
		};

		$scope.afiliados = [];
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

		$scope.msg = {
				'saveE' : 'Se produjo un error al agregar un nuevo grupo',
				'saveS': 'Se guardó con éxito el nuevo grupo',
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


		$scope.getAfiliados = function(){
			afiliadosFactory.getAfiliados().success(function(data){
				$scope.afiliados = data;
			}).error(function(data){
				$scop.afiliados = {};
			})
		}

		$scope.getGrupos = function(){
			gruposFactory.getGrupos().success(function(data){
				$scope.grupos=data;
			}).error(function(data){
				$scope.grupos={};
			});
		}

		$scope.addHijo = function(){
			pariente = {"username": $scope.newAfiliado.username};
			$scope.newHijo.pariente = pariente;
			$scope.newAfiliado.hijos.push($scope.newHijo);
			$scope.newHijo = {};
		}

		$scope.removeHijo = function(index){
			$scope.newAfiliado.hijos.splice(index,1);
		}


		$scope.addAfiliado = function(){
			if(afiliadosFactory.isEditModeOn()){
				afiliadosFactory.editModeOff();
				afiliadosFactory.saveAfiliado($scope.newAfiliado).success(function(data, textStatus){

					if (textStatus == '200'){
						$scope._dataSaved();
						delete $scope.$parent.newAfiliado;
					} else{
						$scope._dataNotSaved();
					}

					$scope.$broadcast('showMSG');

				}).error(function(data){
					alert('Se produjo un error al realizar la petición');
					console.log(data)
				});
			} else{
				actualizarAfiliado();
				afiliadosFactory.addAfiliado($scope.newAfiliado).success(function(data, textStatus){
					if (textStatus == '200')
						$scope._dataSaved();
					else
						$scope._dataNotSaved();

					$scope.$broadcast('showMSG');

				}).error(function(data){
					alert('Se produjo un error al realizar la petición');
					console.log(data)
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

		actualizarAfiliado = function(){
			if ($scope.newAfiliado.hijos == null)
				$scope.newAfiliado.hijos = [];
			if ($scope.newAfiliado.grupos == null)
				$scope.newAfiliado.grupos = [];
		}

		$scope.editAfiliado = function(index){
			afiliadosFactory.getAfiliado($scope.afiliados[index].username).success(function(data){
				$scope.newAfiliado=data;
				actualizarAfiliado(data);

				$scope.$parent.newAfiliado = {};
				$scope.$parent.newAfiliado = data;
				afiliadosFactory.editModeOn();

				$scope.showSection('EditarAfiliados');
			}).error(function(data){
				alert(data+ ' : Se produjo un error al realizar la petición');
			});
		};

		if ($scope.$parent.newAfiliado != undefined){
			$scope.newAfiliado = $scope.$parent.newAfiliado;
		}


		$scope.processAfiliadoString = function(afiliado){
			return afiliado.replace(/ /gi, "_");
		}



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


		  $scope.visual.checkbox='checked';

			$scope.loadData = function(){
					$scope.listaAfiliados = $scope.csv.result;
			};

			$scope.$watch('csv.result',function (newValue, oldValue) {
				if (newValue!=null){
					$scope.tmpUser=new Array();
					for(index in newValue){
						af=newValue[index];
						newAfiliado = {
						  "username": "",
						  "enabled": false,
						  "password": "",
						  "email": "",
						  "nombre": "",
						  "apellido": "",
						  "fechaAfiliacion": "",
						  "correoElectronico": "",
						  "familiarACargo": false,
						  "tieneVehiculo": false,
						  "cantidadHijos": 0,

						};
						nombre=$scope.accentsTidy(af.nombre.split(' ')[0]);
						apellido=$scope.accentsTidy(af.apellido.split(' ')[0]);
						newAfiliado.username=nombre.substring(0,1) + apellido;
						newAfiliado.password=nombre.substring(0,1) + apellido;
						af.username=newAfiliado.username;
						$scope.tmpUser[index]=af.username;
						if((af.datos_hijos!=null)&&(af.datos_hijos!="")){
							hijos = af.datos_hijos.split(';');
							af.datos_hijos=new Array(hijos.length);
							for (hijo in hijos){
								aux=new Object();
								datos = hijos[hijo].split(',');
								aux.fecha=datos[0].replace(/[(")]/g,'');
								if (datos.length > 1)
									aux.sexo=datos[1].replace(/[(")]/g,'');
								af.datos_hijos[hijo]=aux;
								// "hijos": [
							  //   {
							  //     "parentesco": "",
							  //     "fechaNacimiento": "",
							  //     "sexo": "",
							  //     "id": ""
							  //   }
							  // ]
							}
						}
					}
				}
			})

			$scope.accentsTidy = function(s){
			    var r = s.toLowerCase();
			    non_asciis = {'a': '[àáâãäå]', 'ae': 'æ', 'c': 'ç', 'e': '[èéêë]', 'i': '[ìíîï]', 'n': 'ñ', 'o': '[òóôõö]', 'oe': 'œ', 'u': '[ùúûűü]', 'y': '[ýÿ]'};
			    for (i in non_asciis) { r = r.replace(new RegExp(non_asciis[i], 'g'), i); }
			    return r;
			};


	});
