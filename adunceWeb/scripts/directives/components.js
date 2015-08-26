
var app = angular.module('MainApp');


app.directive("cmpDashboard",function(){
	
	return {
		restrict: 'E',
		templateUrl: 'views/adminPartials/dashboard.html',
		controller: 'DashboardAdmController',
		controllerAs: 'dashAdmin',
		link: function(scope, element, attrs){
			scope.$on('loaded', function(event, args){
				element.css('background', 'red');
				var dom = element[0];
				var height = args;
				
				if (height < scope.defaultHeight)
					$(dom).find('#dashboard').css('min-height', scope.defaultHeight);
				else
					$(dom).find('#dashboard').css('min-height', args);
			});
		}
	};
	
});