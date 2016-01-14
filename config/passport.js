var config = require('./config')();
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');
var githubCallback = 'http://' + config.domain + ':' + config.port + '/callback';
var googleCallback = 'http://localhost:3000/auth/google/callback';

module.exports = function(){

	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID: config.clientID,
		clientSecret: config.clientSecret,
		callbackURL: githubCallback
	}, function(accessToken, refreshToken, profile, done){
		Usuario.findOrCreate(
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

	passport.use(new GoogleStrategy({
		clientID:config.clientIDGoogle,
		clientSecret: config.clientSecretGoogle,
		callbackURL: 'http://localhost:3000/auth/google/callback/'
	}, function(accessToken, refreshToken, profile, done){
		Usuario.findOrCreate(
			{"login" : profile.displayName},
			{"nome" : profile.displayName},
			{googleId : profile.id},
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