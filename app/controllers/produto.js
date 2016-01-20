	var sanitize = require('mongo-sanitize');
	module.exports = function(app){

		var Produto = app.models.produto;

	  	var produtoController = {

	  		listaProdutos: function(req, res){
	    		Produto.find().exec()
	      			.then(
	        			function(produtos){
	          				res.json(produtos);
	      			  	},
	        			function(erro){
	          				console.error(erro);
	          				res.status(500).json(erro);
	        			}
	      			);
	  		},

	  		obterProduto: function(req, res){
	  			var _id = sanitize(req.params.id);
	  			Produto.findById(_id).exec()
	  				.then(
	  					function(produto){
	  						res.json(produto);
	  					},
	  					function(erro){
	  						console.error(erro);
	  						res.json("Produto não encontrado");
	  						res.status(500).json(erro);
	  					}
	  				)
	  		},

	  		cadastrarProduto: function(req, res){
	  			var dadosProduto = {
	  				"nome" : sanitize(req.body.nome),
	  				"tipo" : sanitize(req.body.tipo),
	  				"preco" : sanitize(req.body.preco),
	  				"descricao" : sanitize(req.body.descricao),
	  				"sabor" : sanitize(req.body.sabor),
	  				"quantidade" : sanitize(req.body.quantidade)
	  			};
	  			
	  			Produto.create(dadosProduto)
	  				.then(
	  					function(produto){
	  						res.status(201).json(produto);
	  					},
	  					function(erro){
	  						res.json("ERRO AO CADASTRAR PRODUTO");
	  						console.log(erro);
	  						res.status(500).json(erro);
	  					}
	  				);
	  		},

	  		removerProduto: function(req, res){
	  			var _id = sanitize(req._id);
	  			Produto.remove(_id).exec()
	  				.then(
	  					function(produto){
	  						res.json("Excluído o produto ID: "+ _id);
	  					},
	  					function(erro){
	  						res.json("ERRO AO EXCLUIR");
	  						console.log('ERRO: ', erro);
	  					}
	  				);
	  		}

	  };

	  return produtoController;

	}