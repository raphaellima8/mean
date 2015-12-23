angular.module('api').factory('Contato', function($resource){
		return $resource('/contatos/:id');
	});