exports.config = {
	specs: [
		'../test/e2e/**/*.js'
	],
	onPrepare: function(){
		browser.driver.get('http://localhost:3000/login');
		browser.driver.findElement(by.id('entrar')).click();
		browser.driver.findElement(by.id('login_field')).sendKeys();
		browser.driver.findElement(by.id('password')).sendKeys();
		browser.driver.findElement(by.name('commit')).click();
		//browser.driver.findElement(by.name('authorize')).click();
	}
};