angular.module('api').controller('ProdutoController',
	function ($scope, Produto, $routeParams) {
		if($routeParams._id){
			Produto.get({id: $routeParams._id},
				function(produto){
					$scope.produto = produto;
				},
				function(erro){
					$scope.mensagem = {
						texto: 'Não foi possível obter o produto.'
					};
				}
			);
		} else{
			$scope.produto = new Produto();
		}

		$scope.salva = function(){
			$scope.produto.$save()
				.then(function(){
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					$scope.produto = new Produto();
				})
				.catch(function(erro){
					$scope.mensagem = {texto: 'Não foi possível salvar'};
				});
		};

		Produto.query(function(produtos){
			$scope.produtos = produtos;
		});
});
