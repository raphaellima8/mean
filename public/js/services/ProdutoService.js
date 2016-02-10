angular.module('api').factory('Produto', [
	'$resource',
		   function($resource){
			   return $resource('/produtos/:id',
					 {
						 id: '@id'
					 },
					 {
						 update: {
							 method: "POST",
							 url: "/produtos/edit/:id"
						 }
					 }
			   )
		   }
	]);
