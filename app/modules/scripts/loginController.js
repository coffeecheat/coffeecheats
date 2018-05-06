
  angular
    .module('modules')
    .controller('LoginController', function($scope, supersonic,MockDataService,$rootScope) {

     //$scope.Users=MockDataService.getUsers();
     //$scope=MockDataService.getScope();
      // Controller functionality here
      $scope.loginclick=function(){
      //  $scope.Users=MockDataService.getUsers();
        supersonic.logger.debug('login click works');
        //$scope.Users=MockDataService.getUsers();
        supersonic.logger.debug('count on LoginController:'+$rootScope.persistedUsers.length);
      }

  $scope.loginclick1=function(){

    //alert("inside");
    if($scope.login.username=='test' && $scope.login.password=='test'){
    $scope.valid=true;
    steroids.initialView.dismiss();
    }
    else {
      $scope.valid=false;
    }

    //alert('Invalid Username and/or Password');
  };

    });
