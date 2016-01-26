angular.module('api').controller('ProdutosController',
	function(Produto, $scope){

		$scope.produtos = [];

		$scope.filtro = "";

		$scope.mensagem = {texto: ""};

		function buscaProdutos(){
			Produto.query(
				function(produtos){
					$scope.produtos = produtos;
					$scope.mensagem = {};
				},
				function(erro){
					console.log(erro);
					$scope.mensagem = {
						texto: 'Não foi possivel obter a lista de produtos'
					};
				}
			);
		}

		buscaProdutos();

		$scope.remove = function(produto){
			//1º id do contato, 2º Callback de sucesso (buscaContatos), 3º Callback de erro
			Produto.delete({id: produto._id}, buscaProdutos, function(erro){
				console.log(erro);
				$scope.mensagem = {
					texto: 'Não foi possivel remover o produto'
				};
			});
		};
});
