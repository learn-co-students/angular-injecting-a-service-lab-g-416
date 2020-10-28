function ContactController(j,k) {
	j.name = 'Bill Gates';
	k(function(){
		j.name ="kiku"
	}, 5000)
}
ContactController.$inject = ['$scope', '$timeout'];
angular
	.module('app')
	.controller('ContactController', ContactController);