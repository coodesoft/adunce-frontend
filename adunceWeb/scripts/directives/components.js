
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
				//console.log(args);
				var dom = element[0];
				
				$(dom).find('#dashboard').css('min-height', args);
				
				console.log($(dom).find('#dashboard').html());
				console.log($(element[0]));
			});
		}
	};
	
});