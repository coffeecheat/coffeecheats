angular
	.module("modules")
	.controller("homepage_Controller", function($scope, supersonic){
		supersonic.ui.drawers.close(); 

		// function to display the favourite baritsa of the user
		// $scope.viewFavBaritsa=function(){
		// 	window.open("https://www.google.com/maps/search/?api=1&query=-37.797708,144.968341&travelmode=driving&dir_action=navigate");
		// };
		$scope.viewFavBaritsa=function(latlong){
          var string="https://www.google.com/maps/search/?api=1&query="+latlong+"&travelmode=driving&dir_action=navigate";
          supersonic.logger.debug(string);
                    steroids.openURL(string);
        };

	});
