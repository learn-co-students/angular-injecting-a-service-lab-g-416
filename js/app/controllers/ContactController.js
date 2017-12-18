function ContactController($scope, $timeout) {
	$scope.name = 'Tyler';

	$timeout(() => {
		$scope.name = "Emma";
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
