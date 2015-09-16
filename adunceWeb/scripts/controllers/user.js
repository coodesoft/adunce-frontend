
var app = angular.module('MainApp');

app.controller('UserController', function($scope, afiliadosFactory){


  $scope.afiliados={};

  afiliadosFactory.getAfiliados().success(function(data){
    $scope.afiliados=data;
    alert($scope.afiliados.length)
  }).error(function(data){
    alert("fails");
    $scope.afiliados={};
  });

});
