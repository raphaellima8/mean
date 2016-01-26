angular.module('api', ['ngRoute', 'ngResource', 'meusComponentes'])
	.config(function($routeProvider) {

		$routeProvider.when('/contatos', {
			templateUrl: 'partials/contatos.html',
			controller: 'ContatosController'
		});

		$routeProvider.when('/contato/:contatoId', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController'
		});

		$routeProvider.when('/contato',{
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController'
		});

		$routeProvider.when('/produtos', {
			templateUrl: 'partials/produtos.html',
			controller: 'ProdutosController'
		});

		$routeProvider.when('/produto/:produtoId', {
			templateUrl: 'partials/produto.html',
			controller: 'ProdutoController'
		})

		$routeProvider.when('/produto', {
			templateUrl: 'partials/produto.html',
			controller: 'ProdutoController'
		});

		$routeProvider.otherwise({redirectTo: '/contatos'});
	});
