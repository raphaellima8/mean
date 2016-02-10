var verificaAutenticacao = require('../../config/auth');

module.exports = function(app){
  var produto = app.controllers.produto;

  app.route('/produtos')
  	.get(produto.listaProdutos)
  	.post(produto.cadastrarProduto);

  app.route('/produtos/:id/')
  	.get(produto.obterProduto)
  	.delete(produto.removerProduto);

  app.route('/produtos/edit/:id')
    .post(produto.atualizarProduto);
}
