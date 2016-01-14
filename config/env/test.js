module.exports = {
	env: 'test',
	db: 'mongodb://localhost/mean-test',
	sauceTestName: 'MEAN E2E Testing',
	sauceUser: process.env.SAUCE_USERNAME,
	sauceKey: process.env.SAUCE_ACCESS_KEY,
	travisJobNumber: process.env.TRAVIS_JOB_NUMBER,
	travisBuild: process.env.TRAVIS_BUILD_NUMBER,
	clientID: process.env.CLIENT_ID || process.env.CLIENT_ID_GOOGLE,
	clientSecret: process.env.CLIENT_SECRET || process.env.CLIENT_ID_GOOGLE,
	seleniumUser: process.env.SELENIUM_USER,
	seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD,
	port: 3000,
	address: 'localhost',
	domain: 'localhost'
};