angular
	.module('modules')
	.controller('User_Coffe_ExpenseController', function($scope, supersonic) {
     $scope.viewExpenses=function(){    
         $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
    
};
});