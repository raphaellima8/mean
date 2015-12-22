angular.module('api').controller('ContatosController', 
	function($scope, $resource){

		$scope.contatos = [];

		$scope.filtro = "";

		$scope.mensagem = {texto: ""};

		var Contato = $resource("/contatos/:id");

		function buscaContatos(){
			Contato.query(
				function(contatos){
					$scope.contatos = contatos;
					$scope.mensagem = {};
				},
				function(erro){
					console.log(erro);
					$scope.mensagem = {
						texto: 'Não foi possivel obter a lista de contatos'
					};
				}
			);
		}

		buscaContatos();

		$scope.remove = function(contato){
			//1º id do contato, 2º Callback de sucesso (buscaContatos), 3º Callback de erro
			Contato.delete({id: contato._id}, buscaContatos, function(erro){
				console.log(erro);
				$scope.mensagem = {
					texto: 'Não foi possivel remover o contato'
				};
			});
		};
});