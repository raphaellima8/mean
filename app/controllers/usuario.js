var sanitize = require('mongo-sanitize');

module.exports = function(app){

  var User = app.models.user;

  var controller = {};

  controller.listaUsuarios = function(req, res){
    User.find().exec()
      .then(
        function(usuarios){
          res.json(usuarios);
        },
        function(erro){
          console.error(erro);
          res.status(500).json(erro);
        }
      );

  };

  controller.obtemUsuario = function(req, res){
    var _id = req.params.id;
    User.findById(_id).exec()
      .then(
        function(usuario){
          if(!usuario) throw new Error("Contato não encontrado");
          res.json(usuario);
        },
        function(erro){
          console.log(erro);
          res.status(404).json(erro);
        }
      );
  };

  controller.removeUsuario = function(req, res){
    var _id = sanitize(req.params.id);
    User.remove({"_id" : _id}).exec()
      .then(
        function(){
          res.end();
        },
        function(erro){
          return console.error(erro);
        }
      )
  };

  controller.adicionar = function(req, res){
    var Service = app.services.usuario;
    var cb = function(req, res, data) {
                console.log('Success: ', data);
                res.json(data);
              };

      Service.salvar(req, res, cb);

    // var dados = {
    //   "nome": req.body.nome,
    //   "email": req.body.email,
    //   "senha": req.body.senha,
    //   "endereco": req.body.endereco,
    //   "telefone": req.body.telefone
    // };
    // User.create(dados)
    //     .then(
    //       function(usuarioNovo){
    //         res.status(201).json(usuarioNovo);
    //       },
    //       function(erro){
    //         console.log(erro);
    //         res.status(500).json(erro);
    //       }
    //     );
  };

  controller.atualizar = function(req, res){
    var _id = req.body._id;
    var dados = {
      "nome": req.body.nome,
      "email": req.body.email,
      "senha": req.body.senha,
      "endereco": req.body.endereco,
      "telefone": req.body.telefone
    };
    User.findByIdAndUpdate(_id, dados).exec()
        .then(
          function(usuarioAtualizado){
            res.json(usuarioAtualizado);
          },
          function(erro){
            console.error(erro);
            res.status(500).json(erro);
          }
        );
  }

  return controller;
};
