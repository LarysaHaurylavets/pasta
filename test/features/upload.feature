Feature: Working with project files
  As a user
  I can add files to the project

  Background:


  @all@img
    Scenario: Upload valid size image
  #  Given I navigate to the 'home' page
#    When I authorize
#    Then title should be 'PASTA'
    #precondition
    When I upload valid-size image with expiration date '10min' and description 'Image file'
    Then I should see pastie 'image' page
    And I should see the same quality image as was uploaded
    When I click on image preview
    Then I should see big image
    When I click on big image
    Then I should see pastie 'image' page

    #And I click on 'creationButton'
    #And I get to 'project' page
    #test
