angular
  .module('modules')
  .controller('UserDetailsController', function($scope, supersonic) {
    // Controller functionality here
    supersonic.ui.drawers.open();
  });
