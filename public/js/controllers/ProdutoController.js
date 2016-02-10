angular.module('api').controller('ProdutoController',
	function($scope, Produto, $routeParams) {
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
				if($routeParams.produtoId){
					Produto.update({id: $routeParams.produtoId}, $scope.produto,
						function(){
							$scope.mensagem = {
								texto: 'Atualizado com sucesso!'
							};
						},
						function(erro){
							$scope.mensagem = {
								texto: 'Não foi possível obter o produto.'
							};
						});
				} else {
					$scope.produto.$save()
						.then(function(){
							$scope.mensagem = {texto: 'Salvo com sucesso'};
							$scope.produto = new Produto();
						})
						.catch(function(erro){
							$scope.mensagem = {texto: 'Não foi possível salvar'};
						});
				}
			};

		Produto.query(function(produtos){
			$scope.produtos = produtos;
		});
});
