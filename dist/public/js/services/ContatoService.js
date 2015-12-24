angular.module('api').factory('Contato', ["$resource", function($resource){
		return $resource('/contatos/:id');
	}]);