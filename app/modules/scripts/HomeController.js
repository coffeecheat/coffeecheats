angular
  .module('modules')
  .controller('HomeController', function($scope, supersonic) {
    // Controller functionality here
    supersonic.ui.drawers.enable('left');
    supersonic.ui.draers.open('left');

    supersonic.logger.log("new home page came up");
  });
