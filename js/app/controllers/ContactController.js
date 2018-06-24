function ContactController($scope, $timeout) {
	$scope.name = 'Kate Daniels';

	$timeout(function() {
		$scope.name = "Nevada Rogan";
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
