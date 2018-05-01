angular
	.module('modules')
	.controller('MockDataController', function($scope, supersonic) {

//mock cafe data
    $scope.Cafes = [
          {
            CafeId:'1',CafeName:'Haddons',AddressID:1,Rating:'5',ContactNo:'0455243123',
            Description:'Right inside Swinburne uni, it has standard cafe food (pies, cakes, sandwhiches) in the fridge, and coffee',
            Address:
            {
              AddressID:1,
              Text:'27 John Street, Swinburne, Hawthorn, Melbourne',
              Latitude:-37.8220792,
              Longitude:145.0383064,
              Directions:'-37.8220792,145.0383064'
            }
          },
          {
            CafeId:2,CafeName:'StarBucks',AddressID:2,Rating:'7',ContactNo:'0455243987',Description:'Starbucks like to do things a little differently. It’s about coffee, quality, connections. A creative place that embraces diversity with a menu as unique as you are. It’s about an adventurous spirit, no limits, new creations, innovations.',
            Address:
            {
              AddressID:2,
              Text:'Eastland Shopping Centre, 171 - 175 Maroondah Hwy, Ringwood VIC 3134',
              Latitude:37.8114397,
              Longitude:145.160335,
              Directions:'37.8114397,145.160335'
            }
          }
        ];

						$scope.change = function(item) {
				            $scope.selecteditem = item;
				        }
					//mock drinks data
									$scope.Drinks=[
										{
											name:'Latte'
										},
										{
											name:'Mocha'
										},
										{
											name:'Cappucino'
										}
									];
					//mock user data
									$scope.Users=[
										{
											id: 1,name:'Kulbeer',email:'ss.kulbeer24@gmail.com',password:'test',favCafe:'name',favDrink:'Mocha',topup:10
										},
										{
											id: 2,name:'passi',email:'ss.passi@gmail.com',password:'test',favCafe:'name',favDrink:'Mocha',topup:10
										}
									];



									$scope.userModel={
										id:0,name:'',email:'',password:'',favCafe:'',favDrink:'',topup:0
									};

									// $scope.addUsers=function(){
									// 	supersonic.logger.debug('addusers_init');
									//
									//
									// 	clearModel();
									// };



							$scope.addUsersData=function(){
								var _user={
									id:$scope.userModel.id,
									name:$scope.userModel.name,
									email:$scope.userModel.email,
									password:$scope.userModel.password,
									favCafe:$scope.userModel.favCafe,
									favDrink:$scope.userModel.favDrink,
									topup:$scope.userModel.topup
								};
							};

							$scope.bindSelectedData=function(sname,semail,spassword,sfavCafe,sfavDrink,stopup){
								$scope.userModel.id=$scope.EmpList.length + 1;
								$scope.userModel.name=sname;
								$scope.userModel.email=semail;
								$scope.userModel.password=spassword;
								$scope.userModel.favCafe=sfavCafe;
								$scope.userModel.favDrink=sfavDrink;
								$scope.userModel.topup=stopup;
							};

							function clearModel(){
									$scope.userModel.id=0;
									$scope.userModel.name="";
									$scope.userModel.email="";
									$scope.userModel.password="";
									$scope.userModel.favCafe="";
									$scope.userModel.favDrink="";
									$scope.userModel.topup="";
							}

				$scope.signup=function(sname,semail,spassword,sfavCafe,sfavDrink,stopup){
					//	supersonic.logger.debug('sid:'+$window.sId);
					supersonic.logger.debug('string');
					// bindSelectedData(sname,semail,spassword,sfavCafe,sfavDrink,stopup);
					// addUsersData();
					// clearModel();
					$scope.Users.push({id: $scope.Users.length + 1,name:sname,email:semail,password:spassword,favCafe:sfavCafe,favDrink:sfavDrink,topup:stopup});

				//

			// 		$scope.$apply(function () {
			// 			steroids.initialView.show();
						// var view = new supersonic.ui.View("modules#login");
						// supersonic.ui.layers.push(view);
    	// });
				//	alert("haha");
				}
      $scope.directions=function(latlong){
          var string="https://www.google.com/maps/search/?api=1&query="+latlong+"&travelmode=driving&dir_action=navigate";
          supersonic.logger.debug(string);
					steroids.openURL(string);

        };

				// $scope.loginclick=function(){
			  //   //alert("inside");
			  //   if($scope.login.username=='test' && $scope.login.password=='test'){
			  //   $scope.valid=true;
			  // steroids.initialView.dismiss();
			  //   }
			  //   else {
			  //     $scope.valid=false;
			  //   }
				//
			  //   //alert('Invalid Username and/or Password');
			  // };

				$scope.loginclick=function(){
			    for(var i = 0; i < $scope.Users.length; i++)
			       {
							 supersonic.logger.debug(angular.uppercase($scope.Users[i].email)+','+angular.uppercase($scope.Users[i].password));
							 if(angular.uppercase($scope.login.username)==angular.uppercase($scope.Users[i].email) && angular.uppercase($scope.login.password)==angular.uppercase($scope.Users[i].password)){
		 					    $scope.valid=true;
									steroids.initialView.dismiss();
					       }
								 // else {
								 // 	alert('Incorrect Username/password');
								 // }
							}
					 };


//};
});
