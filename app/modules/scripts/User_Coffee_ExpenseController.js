angular
	.module('modules')
	.controller('User_Coffee_ExpenseController', function($scope, supersonic) {
		 supersonic.ui.drawers.close();
           $scope.expenses = [
        {item:'coffee',date:'24/4/2018',expense:'$50'},
        {item:'coffee',date:'24/4/2018',expense:'$20'},
        {item:'coffee',date:'24/4/2018',expense:'$30'}
    ];
});