var {
	defineSupportCode
} = require('cucumber');

var helper = require('../support/Helper.js')

defineSupportCode(function({Given,When,Then}) {

	When(/^I upload valid-size image with expiration date '([^']*)' and description '([^']*)'$/, function(exp, desc) {
		var main = this.pageFactory.getPage('home');
		main.setExpirationDate(exp);
    main.uploadUI('pic');
		main.setDescription(desc);
  	return helper.waitForAndClick(main.shareButton, helper.waitForVisible);
	});

	When(/^I click on '([^']*)' button $/, function() {


	});

//TODO
	Then(/^I should see pastie image page$/, function() {
		  // expect(imgPage.bigImageIsVisible()).toBeFalsy();
			return browser.sleep(2000);
	});

	Then(/^I should see the same quality image as was uploaded$/, function() {
		//download img for comparison
	      imgPage.saveIMG()
	      	.then(function (msg) {
	          console.log("image:", msg);
	           helper.pauseFor(3000)

	        .then(() => {
	          var comparisonResult = compare('./filesToUpload/pic_downloaded.jpg', './filesToUpload/pic.jpg');
						return expect(comparisonResult).isTrue('uploaded image is OK');
	        })
	       });

			// return browser.sleep(2000);
	});

	When(/^I click on image preview'([^']*)' $/, function(projectName) {


	});


});
