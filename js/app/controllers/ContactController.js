function ContactController($scope) {
	$scope.name = 'Bill Gates';
}

$timeout(function () {
	// this would be fired after 2 seconds!
}, 5000);

angular
	.module('app')
	.controller('ContactController', ContactController);