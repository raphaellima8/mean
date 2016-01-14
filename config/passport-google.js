var config = require('./config')();
var GoogleStrategy = require('passport-google').Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');
var googleCallback = 'http://' + config.domain + ':' + config.port + '/callback';

module.exports = function(){

	var Usuario = mongoose.model('Usuario');

	passport.use(new GoogleStrategy({
		returnURL: 'http://localhost:3000/auth/google',
		realm: googleCallback
	}, function(identifier, profile, done){
		Usuario.findOrCreate(
			{"openId" : identifier},
			{"login" : profile.username},
			{"nome" : profile.username},
			function(erro, usuario){
				if(erro){
					console.log(erro);
					return done(erro);
				}
				
				return done(null, usuario);
			}
		);
	}));

	passport.serializeUser(function(usuario, done){
		done(null, usuario._id);
	});

	passport.deserializeUser(function(id, done){
		Usuario.findById(id).exec()
			.then(function(usuario){
				done(null, usuario);
			});
	});
};