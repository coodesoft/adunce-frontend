	
	var app = angular.module('MainApp');
	
	app.controller('AdminController', function($scope, afiliadosFactory){
		
		var self = this;
		
		
		
		$scope.includeSection = function(section){
			return "views/adminPartials/"+section+".html";
		};

	    $scope.listAfiliados = function(){
	    	afiliadosFactory.getAfiliados().success(function(data){
	    		$scope.afiliados = data;
	    	});
	    };
	    
	   
	    self.refactContainersHeight = function (source, destiny){
	    	var hsource  = $('#'+source).css('height');
	    	var hdestiny = $('#'+destiny).css('height');
	    		
	    	if (hsource!=undefined && hdestiny!=undefined){
	    		if (hsource>hdestiny){
	    			$('#'+destiny).css('min-height', hsource);
	    		} else {
	    			$('#'+source).css('min-height', hdestiny);
	    		}
	    	}

	    }

	    
	    
	});
	
	
