angular
	.module('common')
	.factory('DataFactory', function() {

		//mock user data
     var persistedUsers=[
      {
        id: 1,name:'Kulbeer',email:'ss.kulbeer24@gmail.com',password:'test',favCafe:'name',favDrink:'Mocha',topup:10
      },
      {
        id: 2,name:'passi',email:'ss.passi@gmail.com',password:'test',favCafe:'name',favDrink:'Mocha',topup:10
      }
    ];
		// var scope=null;
		//
		// this.setScope=function(scopeSent) {
		// 	this.scope=scopeSent;
		// }
		//
		// this.getScope=function() {
		// 	return this.scope;
		// }
		//return user data stored
    function getUsers(){
			supersonic.logger.debug('getUsers called from service');
      return persistedUsers;
    }

		//return number of users saved
		function length(){
			return persistedUsers.length;
		}


		//new user added with values passed from signup
     function addUser(sid,sname,semail,spassword,sfavCafe,sfavDrink,stopup){
        supersonic.logger.debug('adding user in service id:'+sid+',Name:'+sname+',email:'+semail+',pas:'+spassword+',cafe:'+sfavCafe+',drink:'+sfavDrink+',top:'+stopup);
        var _user={
        	id:sid,
        	name:sname,
        	email:semail,
        	password:spassword,
        	favCafe:sfavCafe,
        	favDrink:sfavDrink,
        	topup:stopup
        };
        persistedUsers.push(_user);

        //persistedUsers.push(id:sid,name:sname,email:semail,password:spassword,favCafe:sfavCafe,favDrink:sfavDrink,topup:stopup);
        supersonic.logger.debug('user added in service with id:'+persistedUsers.length);
     }

         return {
        getUsers: getUsers,
        length: length,
        addUser: addUser
      };
  });
