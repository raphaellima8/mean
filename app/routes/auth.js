var passport = require('passport');
var passportGoogle = require('passport-google');

module.exports = function(app){

	app.get('/auth/github', passport.authenticate('github'));
	app.get('/callback', passport.authenticate('github', {
		successRedirect: '/'
	}));

	app.get('/logout', function(req, res){
		req.logOut();
		res.redirect('/');
	})

	app.get('/login', function(req, res, next){
		if(req.isAuthenticated()){
			return next();
		} else {
			res.render('auth');
		}
	});

	app.get('/auth/google/', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.me',
		'https://www.googleapis.com/auth/plus.login']}));
	app.get('/auth/google/callback/', passport.authenticate('google', 
		{
			successRedirect: '/',
			failureRedirect: '/login'
		})
	);
	app.get('/google/link', passport.authorize('google', { scope: ['https://www.googleapis.com/auth/plus.me',
		'https://www.googleapis.com/auth/plus.login']}));
	app.get('/google/link/callback', passport.authorize('google', 
		{
			successRedirect: '/',
			failureRedirect: '/login'
		})
	);
}