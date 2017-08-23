Feature: Test site pasta.epam.com

	Scenario: Test pasties page
		Given I am on "home" page
		When I click on "Pasties"
		Then title should be "Pasta"
		When I click on "ID" 
		Then page with particular pastie should be displayed

