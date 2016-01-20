var config = require('./config')();
exports.config = {
	sauceUser: config.sauceUser,
	sauceKey: config.sauceKey,
	capabilities : {
		'name': config.sauceTestName,
		'browserName': 'chrome',
		'tunnel-identifier': config.travisJobNumber,
		'build': config.travisBuild
	},
	specs: [
		'../test/e2e/**/*.js'
	],
	onPrepare: function(){
		browser.driver.get('http://localhost:3000/login');
		browser.driver.findElement(by.id('entrar-google')).click();
		browser.driver.findElement(by.name('Email')).sendKeys(config.seleniumUser);
		browser.driver.findElement(by.id('next')).click();
		browser.driver.findElement(by.name('Passwd')).sendKeys(config.seleniumUserPassword);
		browser.driver.findElement(by.name('signIn')).click();
		//browser.driver.findElement(by.name('authorize')).click();
	}
};
