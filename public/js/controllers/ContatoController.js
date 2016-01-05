angular.module('api').controller('ContatoController', 
	function($scope, Contato, $routeParams){
		
		if($routeParams.contatoId){
			Contato.get({id: $routeParams.contatoId}, 
				function(contato){
					$scope.contato = contato;
				}, 
				function(erro){
					$scope.mensagem = {
						texto: 'Não foi possível obter o contato.'
					};
				}
			);
		} else{
			$scope.contato = new Contato();
		}

		$scope.salva = function(){
			$scope.contato.$save()
				.then(function(){
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					$scope.contato = new Contato();
				})
				.catch(function(erro){
					$scope.mensagem = {texto: 'Não foi possível salvar'};
				});
		};

		Contato.query(function(contatos){
			$scope.contatos = contatos;
		});
	});
