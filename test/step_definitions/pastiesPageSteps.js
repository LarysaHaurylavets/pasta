var {
	defineSupportCode
} = require('cucumber');

defineSupportCode(function({Then}) {

	Then(/^I should see a collection of pasties$/, function () {
        return pageFactory.currentPage.getPastiesAmount().then((number)=>{
        	expect(number).to.be.above(0);
        });
    });

	
});
