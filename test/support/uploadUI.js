'use strict';

var path = require('path');
var webdriver = require('selenium-webdriver');

var ad = new webdriver.Builder().usingServer('http://10.6.97.161:4723/wd/hub').withCapabilities({'browserName': 'AutoIt' }).build();

var filePaths = {
	'pic': './filesToUpload/pic.jpg',
	'txt': './filesToUpload/text.txt',
	'video': './filesToUpload/video.mp4',
	'invalid-pic': './filesToUpload/5mb.jpg',
	'invalid-txt': './filesToUpload/more-than-500kb.txt',
	'javascript' : './filesToUpload/JS_code.txt'
};

var upload = function(fileType){
	ad.switchTo().window("Open");
	browser.sleep(1000);
	ad.actions().sendKeys([path.resolve(__dirname, filePaths[fileType])]).perform();
	browser.sleep(1000);
	ad.actions().sendKeys("{ENTER}").perform();
	browser.sleep(2000);
};

module.exports = upload;
