
  angular
    .module('modules')
    .controller('LoginController', function($scope, supersonic) {
      // Controller functionality here



  $scope.loginclick=function(){
    //alert("inside");
    if($scope.login.username=='username' && $scope.login.password=='password'){
    $scope.valid=true;
    // var view = new supersonic.ui.View("example#settings");
    // supersonic.ui.layers.push(view);
  //   var modalView = new supersonic.ui.View("modules#home");
  // var options = {
  //   animate: true
  // }
  //
  // supersonic.ui.modal.show(modalView, options);
  steroids.initialView.dismiss();
    }
    else {
      $scope.valid=false;
    }

    //alert('Invalid Username and/or Password');
  };

    });
