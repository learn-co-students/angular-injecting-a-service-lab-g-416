function ContactController($scope, $timeout) {
	$scope.name = 'Trevor';

	$timeout(function () {
		$scope.name = "Bill Gates"	
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);