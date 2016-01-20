
module.exports = function(app){
  var Model = app.models.user;
  var Operacoes = {
      salvar: function(req, res, cb){
        var dados = req.body;
        var _model = new Model(dados);
        _model.save(function (err, data) {
          if (err){
            console.log('Error: ', err);
            res.json(err);
          }
          else{
            cb(req, res, data);
          }
        });
      }
  }

  return Operacoes;

}