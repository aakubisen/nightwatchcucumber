Feature: Sample02Page Test

@smoke2  @regression
Scenario: Testing the sample02 page

Given I navigate to home page
Then I verify the title of the home page
When I click the sample02 page
Then I enter the form2 details
Then I enter the form1 details
Then I click the home page link in sample02 page
