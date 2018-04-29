angular
  .module('modules')
  .controller('HomeController', function($scope, supersonic) {
    // Controller functionality here
    supersonic.ui.drawers.disable();
  //  supersonic.ui.drawers.open('left');

    supersonic.logger.log("new home page came up");
  });
