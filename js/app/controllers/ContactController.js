function ContactController($scope, $timeout) {
	$scope.name = 'Isabel';

	$timeout(function () {
  	$scope.name = 'Anna';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
