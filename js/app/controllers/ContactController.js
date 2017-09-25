function ContactController($scope, $timeout) {
	$scope.name = 'Andrew';
	$timeout(function () {
		$scope.name = 'Nancy'
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
