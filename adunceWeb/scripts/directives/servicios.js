
var app = angular.module('MainApp');

app.directive("ListServicios", function(){
	
	return {
		restrict: 'E',
		templateUrl: app.tpl.servicios + 'list_servicios.html',
		controller: 'ServiciosAdmAController',
		link: function($scope, element, attrs){
			$scope.$emit('loaded', element.parents('#rightPane').height());
		}	
	}
});


app.directive("addServicios", function(){
	
	return{
		restrict: 'E',
		templateUrl: app.tpl.servicios + 'add_servicios.html',
		controller: 'ServiciosAdmController',
		link: function($scope, element, attrs){
			
			$scope.$emit('loaded', element.parents('#rightPane').height());

			$scope.buildImagePreview = function(){
				var img = $('#imagen');
				
				console.log(img[0].value);
				console.log(element);
				//var url = (window.URL ? URL : webkitURL).createObjectURL(img[0]);
				$scope.previewUrl = img[0].value;
			}
		}	
	}
});

app.directive("editServicios", function(){
	return{
		restrict: 'E',
		templateUrl: appl.tpl.servicios + 'edit_servicios.html',
		controller: 'ServiciosAdmController',
		link: function($scope, element, attrs){
			$scope.$emit('loaded', element.parents('#rightPane').height());
		}	
	}
});
