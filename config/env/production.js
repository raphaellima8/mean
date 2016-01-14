module.exports = {
	env: 'production',
	db: process.env.OPENSHIFT_MONGODB_DB_URL + '/mean',
	clientID: process.env.CLIENT_ID || process.env.CLIENT_ID_GOOGLE,
	clientSecret: process.env.CLIENT_SECRET || process.env.CLIENT_SECRET_GOOGLE,
	port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
	address: process.env.OPENSHIFT_NODEJS_IP,
	domain: process.env.OPENSHIFT_APP_DNS
};