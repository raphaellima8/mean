angular.module('api').controller('ProdutoController', 
	function ($scope, Produto, $routeParams) {
		if($routeParams.produtoId){
			Produto.get({id: $routeParams.produtoId}, 
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

		Produto.query(function(produto){
			$scope.produtos = produto;
		});	
});