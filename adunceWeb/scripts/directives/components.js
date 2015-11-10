
var app = angular.module('MainApp');


app.directive("cmpDashboard",function(){

	return {
		restrict: 'E',
		templateUrl: app.tpl.components + 'dashboard.html',
		link: function($scope, element, attrs){
			
			var component = '.dash-body';
			
			 $(function(){
				 $(component).css('min-height',($(window).height()-$(component).position().top));
				 $scope.defaultHeight = ($(window).height()-$(component).position().top);
			 });
			
			 $(window).resize(function(){
			    $(component).css('min-height',($(this).height()-$(component).position().top));
			    $scope.defaultHeight = ($(window).height()-$(component).position().top);
			 });
			 
			 $scope.$on('loaded', function(event, args){
					var dom = element[0];
					var height = args;
					if (height < $scope.defaultHeight)
						$(dom).find(component).css('min-height', $scope.defaultHeight);
					else
						$(dom).find(component).css('min-height', args);
				});
		},
	};

});

app.directive("cmpUserDash", function(){
	return {
		restrict: 'E',
		templateUrl: app.tpl.components + 'dashboard.html',
		link: function($scope, element, attrs){
			scope.$on('loaded', function(event, args){
				element.css('background', 'red');
				var dom = element[0];
				var height = args;

				if (height < $scope.defaultHeight)
					$(dom).find('#dashboard').css('min-height', $scope.defaultHeight);
				else
					$(dom).find('#dashboard').css('min-height', args);
			});
			$(window).resize(function(){
			    $('#dashboard').css('height',($(this).height()-$('#dashboard').position().top));
			});
			
		}
	}
});

app.directive("cmpNavDash", function(){
	return {
		restrict: 'E',
		templateUrl: app.tpl.components + 'header.html',
		controller: ['$scope', function($scope) {

			$scope.dashVisible = true;
				
			$scope.showDash = function(){
				if ($scope.dashVisible == true)
					$scope.dashVisible = false;
				else
					$scope.dashVisible = true;
			}
		}]
	}
});

app.directive("cmpAlert", function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: app.tpl.components + 'alert.html',
		link: function($scope, element, attrs){
			$scope.$on('showMSG', function(){
				var alert = element.find('span').parent();
				alert.removeClass('hidden');
				alert.addClass('show');
				setTimeout(function(){
					 alert.removeClass('show');
					 alert.addClass('hidden');
				}, 1000);
			})
		}
	}
})
