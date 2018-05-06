angular
	.module('common')
	.service('DataService', function() {

		//mock user data
     persistedUsers=[
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
    this.getUsers=function(){
			supersonic.logger.debug('getUsers called from service');
      return persistedUsers;
    }

		//return number of users saved
		this.length=function(){
			return persistedUsers.length;
		}


		//new user added with values passed from signup
     this.addUser=function(sid,sname,semail,spassword,sfavCafe,sfavDrink,stopup){
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
  });
