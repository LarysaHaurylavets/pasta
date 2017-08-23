Feature: Test site pasta.epam.com

	Scenario: Test pasties page
		Given I am on "home" page
		When I click "Pasties"
		Then Pasties page should be displayed
		When I choose "ID" pastie
		Then page with particular pastie should be displayed

