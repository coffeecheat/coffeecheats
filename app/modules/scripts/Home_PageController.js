angular
	.module("modules")
	.controller("homepage_Controller", function($scope, supersonic){
		supersonic.ui.drawers.open(); //opwn drawer functionality

		// function to display the favourite baritsa of the user
		// $scope.viewFavBaritsa=function(){
		// 	window.open("https://www.google.com/maps/search/?api=1&query=-37.797708,144.968341&travelmode=driving&dir_action=navigate");
		// };

	});
