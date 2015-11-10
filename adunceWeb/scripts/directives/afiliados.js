

var app = angular.module('MainApp');



app.directive("afiliadosList",function(){

	return {
		restrict: 'E',
		templateUrl: app.tpl.afiliados + 'list_afiliados.html',
		controller: 'AfiliadosAdmController',
		controllerAs: 'afAdmin' ,
		link: function(scope, element, attrs){
			scope.$emit('loaded', element.parents('#rightPane').height());
		}
	};

});

app.directive("addAfiliado", function() {

	return {
		restrict: 'E',
		templateUrl: app.tpl.afiliados +'add_afiliados.html',
		controller: "AfiliadosAdmController",
		controllerAs: 'afAdmin',
		link: function(scope, element, attrs){
			scope.$emit('loaded', element.parents('#rightPane').height());
		}
	};
});

app.directive("editAfiliado", function() {

	return {
		restrict: 'E',
		templateUrl: app.tpl.afiliados + 'edit_afiliado.html',
		controller: "AfiliadosAdmController",
		controllerAs: 'afAdmin',
		link: function(scope, element, attrs){
			scope.$emit('loaded', element.parents('#rightPane').height());
		}
	};
});
