function ContactController($scope,$timeout) {
	$scope.name = 'Bill Gates';
	$timeout(, 2000);

}

angular
	.module('app')
	.controller('ContactController', ContactController);
