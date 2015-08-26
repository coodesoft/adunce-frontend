
	var app = angular.module('MainApp');

	app.controller('AdminController', function($scope, afiliadosFactory){


		$scope.visibility = true;


		$scope.dashstatus = 'standard';

		$scope.showMenu = function(){

			if ($scope.dashstatus == 'standard')
				$scope.dashstatus = 'minimal';
			else
				if ($scope.dashstatus == 'minimal')
					$scope.dashstatus = 'hide';
				else
					if ($scope.dashstatus == 'hide')
						$scope.dashstatus = 'standard';

		};

		$scope.initDash = function(){
			 $(window).resize(function(){
				    $('#dashboard').css('height',($(this).height()-$('#dashboard').position().top));
			 });

			 $(function(){
				 $('#dashboard').css('height',($(this).height()-$('#dashboard').position().top));
			 });

			$scope.sections = [
			         { 'name': 'Afiliados',
			           'icon': 'glyphicon glyphicon-user',
			           'actions' : [
			                        { 'name' : 'Listar', 'icon':'glyphicon glyphicon-align-justify' },
			                        { 'name' : 'Agregar', 'icon':'glyphicon glyphicon-plus' },
			                        // { 'name' : 'Borrar', 'icon':'glyphicon glyphicon-minus' },
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
				                	   { 'name' : 'Agregar', 'icon':'glyphicon glyphicon-plus' },
					                   { 'name' : 'Borrar', 'icon':'glyphicon glyphicon-minus' },
				                   ]
				    },

			     ];
		};

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
	    self.refactContainersHeight = function (source, destiny){
	    	var hsource  = $('#'+source).css('height');
	    	var hdestiny = $('#'+destiny).css('height');
	    		
	    	if (hsource!=undefined && hdestiny!=undefined){
	    		if (hsource>hdestiny){
	    			$('#'+destiny).css('min-height', hsource);
	    		} else {
	    			$('#'+source).css('min-height', hdestiny);
	    		}
	    	}

	    }
});
