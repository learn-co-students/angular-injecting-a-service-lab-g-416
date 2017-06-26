function ContactController($scope, $timeout) {
	$scope.name = 'Bill Gates';
	$timeout(function () {
		$scope.name = 'Mike Djurdjevic'
	}, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);
