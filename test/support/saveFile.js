'use strict';

var path = require('path');
var fs = require('fs');

var webdriver = require('selenium-webdriver');
var ad = new webdriver.Builder().usingServer('http://10.6.97.161:4723/wd/hub').withCapabilities({'browserName': 'AutoIt' }).build();


var filePaths = {
	'pic': './filesToUpload/pic_downloaded.jpg',
	'txt': './filesToUpload/code_downloaded.txt',
	'video': './filesToUpload/video_downloaded.mp4',
	'invalid-pic': './filesToUpload/5mb.jpg',
	'invalid-txt': './filesToUpload/more-than-500kb.txt'
};

var save = function(fileType) {
	var pth = path.resolve(__dirname, filePaths[fileType]);
	if(fs.existsSync(pth)) {
			console.log('file ' + pth + ' already exists, will be removed...');
			fs.unlinkSync(pth);
		};
		
		ad.actions().sendKeys("{CTRLDOWN}").sendKeys('s').sendKeys("{CTRLUP}").perform();
		browser.sleep(2000);
		ad.switchTo().window("Save As");
		browser.sleep(2000);
		
		ad.actions().sendKeys([pth]).perform();
		browser.sleep(2000);
		ad.actions().sendKeys("{ENTER}").perform();
		browser.sleep(2000);		
			

};


module.exports = save;
