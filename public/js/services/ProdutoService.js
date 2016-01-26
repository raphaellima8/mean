angular.module('api').factory('Produto', function($resource){
		return $resource('/produtos/:id/');
	});
