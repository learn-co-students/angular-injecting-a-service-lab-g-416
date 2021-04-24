function ContactController($scope, $timeout) {
	$scope.name = 'Dasha Lary';
	$timeout(function () {
		$scope.name = 'Bob Smith';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);