
var app=angular.module("MainApp");

app.controller("DashboardAdmController",function($scope){
	
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
			    $('#dashboard').css('min-height',($(this).height()-$('#dashboard').position().top));
			    $scope.defaultHeight = ($(window).height()-$('#dashboard').position().top);
		 });

		 $(function(){
			 $('#dashboard').css('min-height',($(window).height()-$('#dashboard').position().top));
			 $scope.defaultHeight = ($(window).height()-$('#dashboard').position().top);
		 });
		
		
		$scope.sections = [
		         { 'name': 'Afiliados',
		           'icon': 'glyphicon glyphicon-user',
		           'actions' : [
		                        { 'name' : 'Listar', 'icon':'glyphicon glyphicon-align-justify' },
		                        { 'name' : 'Agregar', 'icon':'glyphicon glyphicon-plus' },
		                        { 'name' : 'Listar', 'icon':'glyphicon glyphicon-align-justify' },
		                        { 'name' : 'Agregar', 'icon':'glyphicon glyphicon-plus' },
		                        { 'name' : 'Listar', 'icon':'glyphicon glyphicon-align-justify' },
		                        { 'name' : 'Agregar', 'icon':'glyphicon glyphicon-plus' },
		                        { 'name' : 'Listar', 'icon':'glyphicon glyphicon-align-justify' },
		                        { 'name' : 'Agregar', 'icon':'glyphicon glyphicon-plus' },
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
});