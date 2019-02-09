function ContactController($scope) {
	$scope.name = 'Bill Gates';
	$timeout(function () {
		$scope.name = 'Mike P';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);