var verificaAutenticacao = require('../../config/auth');

module.exports = function(app){
  var usuario = app.controllers.usuario;

  app.route('/usuarios')
  	.get(verificaAutenticacao, usuario.listaUsuarios)
  	.post(verificaAutenticacao, usuario.adicionar);

  app.route('/usuarios/:id')
  	.get(verificaAutenticacao, usuario.obtemUsuario)
  	.delete(verificaAutenticacao, usuario.removeUsuario);

  app.get('/usuario', function(req, res){
  	res.render('signup');
  })
}
