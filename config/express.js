var express = require('express');
var home = require('../app/routes/home');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = function(){
  var app = express();

  app.set('port', 3000);

  //Ativar middlewares
  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());

  //Parser do header de cookies da requisição populando req.cookies e armazena ID da sesão
  app.use(cookieParser());

  //Cria por padrão, a sessão do user em memoria. Recebe 3 parametros
  app.use(session(
     {
        secret: 'raphael', //Assinatura do cookie
        resave: true, //Garante que as infos da sessão serão acessíveis através de cookies a cada req
        saveUninitialized: true //Soluciona problemas que envolvem a req de uma permissão antes de atribuir um cookie
     }
  ));

  app.use(passport.initialize());
  app.use(passport.session());

  //Setando a template engine
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  load('models', {cwd: 'app'})
      .then('controllers')
      .then('routes')
      .into(app);

  return app;
};
