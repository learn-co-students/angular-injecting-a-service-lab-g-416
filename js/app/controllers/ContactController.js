function ContactController($scope, $timeout) {
	$scope.name = 'Bill Gates';

	$timeout(function () {
    $scope.name = "Bugs Bunny!"
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
