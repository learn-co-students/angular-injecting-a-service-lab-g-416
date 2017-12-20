function ContactController($scope, $timeout) {
    $scope.name = 'Ben Greenberg';

    $timeout(function() {
        $scope.name = "Something else";
    }, 5000);
}

angular
    .module('app')
    .controller('ContactController', ContactController);