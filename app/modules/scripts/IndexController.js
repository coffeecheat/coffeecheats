angular
  .module('modules')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    supersonic.ui.tabs.hide();
    supersonic.ui.drawers.disable('left');
  });
