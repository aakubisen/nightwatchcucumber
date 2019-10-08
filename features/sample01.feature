Feature: Sample01Page Test

@smoke1  @regression
Scenario: Testing the sample01 page

Given I navigate to home page
Then I verify the title of the home page
When I click the sample01 page
Then I fill the form details
Then I click the home page link in sample01 page
