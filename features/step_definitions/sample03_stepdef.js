const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When}) => {
  When(/^I click the sample03 page$/, () => {
    return client
    .page.HomePage().navigateToSample03Page()
  })

  Then(/^I enter the form details in sample03 page and submit the form$/,() => {
    return client
    .page.Sample03Page().enterFormDetailsInSample03('Michael','Jackson','Home Address','America','male')
    .page.Sample03Page().submitForm()
  })

  Then(/^I click the home page link in sample03 page$/, () => {
    return client
    .page.Sample03Page().backHomeFromSample03Page()
  })

})
