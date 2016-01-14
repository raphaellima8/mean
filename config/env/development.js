module.exports = {
	env: 'development',
	db: 'mongodb://localhost/mean',
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	clientIDGoogle: process.env.CLIENT_ID_GOOGLE,
	clientSecretGoogle: process.env.CLIENT_SECRET_GOOGLE,
	seleniumUser: process.env.SELENIUM_USER,
	seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD,
	port: 3000,
	address: 'localhost',
	domain: 'localhost'
};