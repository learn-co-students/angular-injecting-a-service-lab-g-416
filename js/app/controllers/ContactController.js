function ContactController($scope, $timeout) {
	$scope.name = 'antley';
	$timeout( function(){$scope.name = "bill gates"}, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);