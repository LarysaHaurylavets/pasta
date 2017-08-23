Feature: Working with project files
  As a user
  I can add files to the project

  #Background:
  #Given I navigate to the 'home' page
  #Then I am on page with the title 'Projects · Dashboard · GitLab'
  #When I authorize
  #And I get to 'new-project' page
#  Then I am on page with the title ''

  #@all@img
    Scenario: Upload valid size image
    #precondition
    When I upload valid-size image with expiration date '10min' and description 'Image file'
    Then I should see the same quality image as was uploaded
    #And I click on 'creationButton'
    #And I get to 'project' page
    #test
