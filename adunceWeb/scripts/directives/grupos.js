
var app = angular.module("MainApp");

app.directive("listGrupos", function(){
	
	return {
		restrict: 'E',
		templateUrl: app.tpl.grupos + 'list_grupos.html',
		controller: 'GruposAdmController',
		link: function(scope, element, attrs){
			scope.$emit('loaded', element.parents('#rightPane').height());
		}		
	}
});

app.directive("addGrupos", function(){
	
	return {
		restrict: 'E',
		templateUrl: app.tpl.grupos + 'add_grupos.html',
		controller: 'GruposAdmController',
		link: function(scope, element, attrs){
			scope.$emit('loaded', element.parents('#rightPane').height());
		}
	}
}); 

app.directive("editGrupos", function(){
	
	return {
		restrict: 'E',
		templateUrl: app.tpl.grupos + 'edit_grupos.html',
		controller: 'GruposAdmController',
		link: function(scope, element, attrs){
			scope.$emit('loaded', element.parents('#rightPane').height());
		}
	}
})



