var {
	defineSupportCode
} = require('cucumber');

defineSupportCode(function({Given,When,Then}) {

	When(/^I upload valid-size image$/, function() {
		var main = pageFactory.getPage('home');
		main.setExpirationDate('10min');
    main.uploadUI('pic');
		main.setDescription("Image file");
  	return helper.waitForAndClick(main.shareButton, helper.waitForVisible);
	});

	Then(/^I should see pastie image page$/, function() {
		  // expect(imgPage.bigImageIsVisible()).toBeFalsy();
			return browser.sleep(10000);
	});

	When(/^I have my project created with the name '([^']*)' and visible private$/, function(projectName) {
		return this.pageFactory.currentPage.checkProjectVisibility(projectName);
	});


});
