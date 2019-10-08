const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When}) => {
  When(/^I click the sample02 page$/, () => {
    return client
    .page.HomePage().navigateToSample02Page()
  })

  Then(/^I enter the form2 details$/,() => {
    return client
    .page.Sample02Page().enterForm2Details('Michael','Jackson','Home Address','America','male')
    .page.Sample02Page().frameSwitch()
  })

  Then(/^I enter the form1 details$/,() => {
    return client
    .page.Sample02Page().enterForm1Details('Annya','Jackson','Home Address1','Bangladesh','female')
    .page.Sample02Page().frameSwitch()
  })

  Then(/^I click the home page link in sample02 page$/, () => {
    return client
    .page.Sample02Page().backHomeFromSample02Page()
  })

})
