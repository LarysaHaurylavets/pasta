Feature: Working with project files
  As a user
  I can add files to the project

  #Background:
  #Given I navigate to the 'home' page
  #Then I am on page with the title 'Projects · Dashboard · GitLab'
  #When I authorize
  #And I get to 'new-project' page
#  Then I am on page with the title ''

#  @all
    Scenario: Upload valid size image
    #precondition
    When I upload valid-size image
    And I click on 'creationButton'
    #And I get to 'project' page
    #test
  #  And I click on 'readmeLink'
  #  And I get to 'newFile' page
#    And I fill field 'fileEditor' with the value 'text for check'
#    And I click on 'commitChanges'
#    And I get to 'file' page
#    Then I check 'title' equal 'README.md'
      Then I check 'description' equal 'text for check'
#    #postcondition
#    And I click on 'settingsTab'
#    And I get to 'project-settings' page
#    And I click on 'removeProjectButton'
#    And I confirm the deletion of 'project-for-readme' project
