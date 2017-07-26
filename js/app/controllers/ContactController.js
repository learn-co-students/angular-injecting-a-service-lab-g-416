function ContactController($scope, $timeout) {
	$scope.name = 'Alex Rogachev';

	$timeout(() => { $scope.name = "HaHaHa!" }, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);
