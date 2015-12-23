var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function(){

	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clienteID: 'f46e8792da1a8e7a27ba',
		clientScret: '76f7f11ecbfb05d8e395894e8bbb2aadceedf717',
		callbackURL: 'http://localhost:3000/auth/github/callback'
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
};