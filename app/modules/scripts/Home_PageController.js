
angular
	.module('modules')
	.controller("homepage_Controller", function($scope, supersonic){
		supersonic.ui.drawers.disable(); 

		$scope.viewFavBaritsa=function(latlong){
          var string="https://www.google.com/maps/search/?api=1&query="+latlong+"&travelmode=driving&dir_action=navigate";
          supersonic.logger.debug(string);
                    steroids.openURL(string);
		};
		
		// function used to navigate user from home page to QR code generator page
		$scope.goToScannerPage=function(){
			supersonic.ui.drawers.disable();
			supersonic.ui.layers.push("modules#Point_Scanner");
		};

	});
