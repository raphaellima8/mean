var express = require('express');
var passport = require('passport');
//var home = require('./app/routes/home');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var helmet = require('helmet');

module.exports = function(){
  var app = express();

  app.set('port', 8080);

  //Setando a template engine
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

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
  app.use(helmet());
  app.use(helmet.xframe());
  app.use(helmet.xssFilter());
  app.use(helmet.nosniff());
  app.disable('x-powered-by');
  app.use(helmet.hidePoweredBy({seeTo: 'PHP 5.5.14'}));

  load('models', {cwd: 'app'})
      .then('controllers')
      .then('routes/auth.js')
      .then('routes')
      .into(app);

  app.get('*', function(req, res){
    res.status(404).render('404');
  });

  return app;
};
