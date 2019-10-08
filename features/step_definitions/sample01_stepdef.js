const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When}) => {
  Given(/^I navigate to home page$/, () => {
    return client
    .page.HomePage().goToTanmay()
  })

  Then(/^I verify the title of the home page$/, () => {
    return client
    .page.HomePage().validateHeader()
  })

  When(/^I click the sample01 page$/, () => {
    return client
    .page.HomePage().navigateToSample01Page()
  })

  Then(/^I fill the form details$/,() => {
    return client
    .page.Sample01Page().enterFormDetails('Michael','Jackson','Home Address','America','male')
  })

  Then(/^I click the home page link in sample01 page$/, () => {
    return client
    .page.Sample01Page().backHomeFromSample01Page()
  })

})
