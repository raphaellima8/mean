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
			templateUrl: 'partials/produto.html',
			controller: 'ProdutoController'
		});

		$routeProvider.when('/listar-produtos', {
			templateUrl: 'partials/produtos.html',
			controller: 'ProdutosController'
		});

		$routeProvider.otherwise({redirectTo: '/contatos'});
	});