Feature: Sample03Page Test

@smoke3  @regression
Scenario: Testing the sample03 page

Given I navigate to home page
Then I verify the title of the home page
When I click the sample03 page
Then I enter the form details in sample03 page and submit the form
Then I click the home page link in sample03 page
