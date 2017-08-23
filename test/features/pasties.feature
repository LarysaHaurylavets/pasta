Feature: Test site pasta.epam.com

	@pasties@all
	Scenario: Test pasties page
		Given I navigate to the 'home' page
		When I authorize
		Then title should be "Pasta"
		When I click on "Pasties"
		Then I should see a collection of pasties
		When I click on "ID"
		Then page with particular pastie should be displayed
