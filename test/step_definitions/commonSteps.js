var { defineSupportCode} = require('cucumber');
var pageFactory = require('../po/pageFactory.js');
var basePage= require('../po/BasePage.js');

defineSupportCode(function({Given,When,Then}) {

	When(/^I authorize$/, function() {
		// return this.pageFactory.currentPage.authorize();
		return this.pageFactory.currentPage.login();
	});

	Given(/^I am on '([^']*)' page$/, function (page) {
        return pageFactory.getPageObjects(page).visit(pageFactory.currentPage._data.url);
	});

	Then(/^title should be '([^']*)'$/, function (pageTitle) {
        return pageFactory.currentPage.getPageTitle()
        	.then((title)=>{
        		return expect(title).to.equal(pageTitle);
        	});
	});	

	

	

});
