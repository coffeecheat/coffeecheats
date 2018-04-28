angular
  .module('modules')
  .controller('UserDetailsController', function($scope, supersonic) {
    
    supersonic.ui.drawers.close();
    //put the list of barista particpating to the dropdown list
 	 $scope.baristaList = ["Hawthorn", "Carlton", "Swinburne"]; //test list
 	 $scope.coffeeList = ["Latte", "Espresso", "Long black"]
  });
