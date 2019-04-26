function ContactController($scope, $timeout) {
  $scope.name = "Bill Gates";
  $timeout(() => {
    $scope.name = "Paul";
  }, 5000);
}

angular.module("app").controller("ContactController", ContactController);
