angular
	.module('modules',['common'])
	.controller('MockDataController', function($scope, supersonic,DataService,DataFactory,MockDataService) {

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

				// $localStorage.Users=[
	     //   {
	     //     id: 1,name:'Kulbeer',email:'ss.kulbeer24@gmail.com',password:'test',favCafe:'name',favDrink:'Mocha',topup:10
	     //   },
	     //   {
	     //     id: 2,name:'passi',email:'ss.passi@gmail.com',password:'test',favCafe:'name',favDrink:'Mocha',topup:10
	     //   }
	     // ];

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


									$scope.Users=MockDataService.getUsers();


										function refreshData()
										{
											supersonic.logger.debug('refreshing data');
											$scope.Users=MockDataService.getUsers();

											supersonic.logger.debug('new count'+$scope.Users.length);
										}


									$scope.userModel={
										id:0,name:'',email:'',password:'',favCafe:'',favDrink:'',topup:0
									};

								//	$scope.loginData=[];


							function addUsersData(){
								// var _user={
								// 	id:$scope.userModel.id,
								// 	name:$scope.userModel.name,
								// 	email:$scope.userModel.email,
								// 	password:$scope.userModel.password,
								// 	favCafe:$scope.userModel.favCafe,
								// 	favDrink:$scope.userModel.favDrink,
								// 	topup:$scope.userModel.topup
								// };
								supersonic.logger.debug('add in controller');
								MockDataService.addUser($scope.userModel);
								$scope.Users=MockDataService.getUsers();

								supersonic.logger.debug('new count'+MockDataService.getUsers().length);
							};

							function bindSelectedData(sname,semail,spassword,sfavCafe,sfavDrink,stopup){
								supersonic.logger.debug('binding');
								$scope.userModel.id=$scope.Users.length + 1;
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
					supersonic.logger.debug('signup started');
					var _user={
	        	id:$scope.Users.length + 1,
	        	name:sname,
	        	email:semail,
	        	password:spassword,
	        	favCafe:sfavCafe,
	        	favDrink:sfavDrink,
	        	topup:stopup
	        };
					//$rootScope.persistedUsers.push(_user);
					//bindSelectedData(sname,semail,spassword,sfavCafe,sfavDrink,stopup);
					MockDataService.addUser($scope.Users.length + 1,sname,semail,spassword,sfavCafe,sfavDrink,stopup);
					//DataService.addUser($scope.Users.length + 1,sname,semail,spassword,sfavCafe,sfavDrink,stopup);
					//DataService.setScope($scope);
					// addUsersData();
					//  clearModel();
					 //srefreshData();
				//	 $scope.loginData=$scope.Users;
					//$scope.Users.push({id: $scope.Users.length + 1,name:sname,email:semail,password:spassword,favCafe:sfavCafe,favDrink:sfavDrink,topup:stopup});
				//	var view = new supersonic.ui.View("modules#login");
					//supersonic.ui.layers.push(view);
				//	supersonic.ui.initialView.show();

				}
      $scope.directions=function(latlong){
          var string="https://www.google.com/maps/search/?api=1&query="+latlong+"&travelmode=driving&dir_action=navigate";
          supersonic.logger.debug(string);
					steroids.openURL(string);

        };

				$scope.loginclick_test=function(){
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

				$scope.loginclick=function(){
				//refreshData();
				supersonic.logger.debug('count on MockDataController for login :'+$scope.Users[$scope.Users.length-1].name);
				}
				$scope.loginclick_original=function(){
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
