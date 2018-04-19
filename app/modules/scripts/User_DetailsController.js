angular
  .module('modules')
  .controller('UserDetailsController', function($scope, supersonic) {
    
    supersonic.ui.drawers.open();
    //put the list of barista particpating to the dropdown list
 	 $scope.baristaList = ["Hawthorn", "Carlton", "Swinburne"]; //test list

  });
