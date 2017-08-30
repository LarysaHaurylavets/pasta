var chai = require("chai");
var protractor = require("protractor");

exports.config = {
	seleniumAddress: "http://localhost:4444/wd/hub",
	baseUrl: "https://pasta.lab.epam.com/",
	capabilities: {
		browserName: process.env.BROWSER
	},
	framework: "custom",
	frameworkPath: require.resolve("protractor-cucumber-framework"),
	specs: ['features/*.feature'],
	onPrepare: function() {
		global.expect = chai.expect;
		global.EC = protractor.ExpectedConditions;
		browser.ignoreSynchronization = true;

		var autoit_ips = {
			"remote" : 'http://10.6.132.40:4723/wd/hub',
			"larisa" : 'http://10.6.97.161:4723/wd/hub',
			"misha" : 'http://10.6.97.105:4723/wd/hub',
			"eug" : 'http://10.6.96.243:4723/wd/hub'
		};

		global.AUTOIT_IP = autoit_ips[process.env.AUTOIT_HOST];
		console.log("\nAUTOIT EXECUTION IP: ", global.AUTOIT_IP);
	},
	cucumberOpts: {
		strict: true,
		format: ["pretty"],
		require: ["step_definitions/*.js", "support/*.js"],
		tags: process.env.TAGS
	}
};
