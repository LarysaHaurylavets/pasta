var {defineSupportCode} = require('cucumber');

var pageFactory = require('../po/pageFactory.js');
var header = require('../po/ui/Header.js');
//var pastiesPage = require('../po/pastiesPage.js');


defineSupportCode(function({When,Then}) {

	When(/^I click on button pasties$/, function () {
        return pageFactory.currentPage.header.clickPasties();
    });

	Then(/^I should see a collection of pasties$/, function () {
        return pageFactory.currentPage.getPastiesAmount().then((number)=>{
        	expect(number).to.be.above(0);
        });
    });

    When(/^I choose ID of pastie$/, function () {
        return pageFactory.currentPage.pastiesID.first().getText().then((id)=>{
            pageFactory.currentPage.choosePastie(id);
        });
    });

	
});
