'use strict';
const exec = require('child_process').execFile;
class BasePage {

    constructor() {
        this.header = require('./ui/Header.js');;
        this.url = '';
    }

    getHeader() {
        return this.header;
    }

    visit() {
        return browser.get('https://pasta.lab.epam.com/' + this.url);

        // //TODO remove
        // return browser.get('http://www.httpwatch.com/httpgallery/authentication/');
    }

    getPageTitle() {
        return browser.getTitle();
    }

    getUrl() {
        return browser.getCurrentUrl();
    }

    _login() {
      // return new Promise(function (resolve, reject)  {
        // browser.sleep(8000);
        console.log("run login script");
        exec('./test/support/exe/login.exe', function (err, data) {
        // exec('./login.exe', function (err, data) {
            // console.log(err);
            console.log(data.toString());
        });
        console.log("script finished");
        return browser.sleep(5000);
        // return resolve("login finished");

      // });
    }

    login() {
      browser.getTitle()
        .then((txt) => console.log('title', txt));
      // browser.findElement(By.css('#displayImage')).click();
      // browser.sleep(3000);

      var user = process.env.MY_USER;
      var pass = process.env.MY_PASS;

      var webdriver = require('selenium-webdriver');
      var ad = new webdriver.Builder().usingServer('http://10.6.96.243:4723/wd/hub').withCapabilities({'browserName': 'AutoIt' }).build();

      ad.switchTo().window("Authentication Required");
      // ad.actions().sendKeys("{TAB}").perform();
      browser.sleep(500);
      ad.actions().sendKeys("variable").perform();
      browser.sleep(500);
      ad.actions().sendKeys("{TAB}").perform();
      browser.sleep(500);
      ad.actions().sendKeys("send help").perform();
      browser.sleep(500);
      ad.actions().sendKeys("{ENTER}").perform();
      browser.sleep(5000);

    }

}
module.exports = BasePage;
