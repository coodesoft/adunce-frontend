

var app = angular.module('MainApp');


app.directive("afiliadosList",function(){

	return {
		restrict: 'E',
		templateUrl: 'views/adminPartials/list_afiliados.html',
		controller: 'AfiliadosAdmController',
		controllerAs: 'afAdmin' ,
		link: function(scope, element, attrs){
			scope.$emit('loaded', element.parents('.right').height());
		}
	};

});

app.directive("addAfiliado", function() {

	return {
		restrict: 'E',
		templateUrl: 'views/adminPartials/add_afiliados.html',
		controller: "AfiliadosAdmController",
		controllerAs: 'afAdmin',
		link: function(scope, element, attrs){
			scope.$emit('loaded', element.parents('.right').height());
		}
	};
});
	app.directive("editAfiliado", function() {

		return {
			restrict: 'E',
			templateUrl: 'views/adminPartials/edit_afiliado.html',
			controller: "AfiliadosAdmController",
			controllerAs: 'afAdmin',
			link: function(scope, element, attrs){
				scope.$emit('loaded', element.parents('.right').height());
			}
		};
});
