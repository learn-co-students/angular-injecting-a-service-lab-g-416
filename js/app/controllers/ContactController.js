function ContactController($scope, $timeout) {
	$scope.name = 'Efrain';

	$timeout(() => $scope.name = "Joey" , 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);