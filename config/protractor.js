exports.config = {
	specs: [
		'../test/e2e/**/*.js'
	],
	onPrepare: function(){
		browser.driver.get('http://localhost:3000/login');
		browser.driver.findElement(by.id('entrar')).click();
		browser.driver.findElement(by.id('login_field')).sendKeys('raphael.aolima8@gmail.com');
		browser.driver.findElement(by.id('password')).sendKeys('arthur123');
		browser.driver.findElement(by.name('commit')).click();
	}
};