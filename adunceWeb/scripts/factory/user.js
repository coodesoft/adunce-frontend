var app = angular.module('MainApp');

app.factory('userFactory', ['$http', function($http){

  var userFactory = {};

  userFactory.user = {};

  userFactory._url = app.server + '/REST/user';

  userFactory.user={};
  userFactory.loggedIn =false;

  userFactory.getUser = function(credentials){
		var headers=credentials ? {authorization : "Basic "
        + btoa(credentials.username + ":" + credentials.password)
    } : {};

    $http.get(afiliadosFactory._url,{headers : headers}).success(function(data, textStatus){

      if (textStatus == '200'){
        userFactory.user=data;
        userFactory.loggedIn=true;
      }
    }).error(function(data){
      userFactory.error = data;
    });
    if (userFactory.loggedIn)
      return userFactory.user;
    else
      throw userFactory.error;
	};

  userFactory.isLoggedIn = function(){
    return userFactory.loggedIn;
  };

  return userFactory;
}]);

app.run(function($rootScope, $location,userFactory) {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      if (!userFactory.isLoggedIn()) {
        $location.path("/");
      }
    });
});
