module.exports = function (browser) {
  var sample03 = browser.page.BaseContent();
  this.enterFormDetailsInSample03 = function(fname, lname, homeaddr,country,gender) {
    browser
    sample03.fillForm(fname, lname, homeaddr,country,gender);
    return browser;
  };
  
  this.submitForm = function() {
    browser
    .click('input[value="Submit"]')
    sample03.windowHandle();
    browser.assert.containsText('p','Hello')
    browser.closeWindow();
    sample03.windowHandle();
    return browser;
  };

  this.backHomeFromSample03Page = function(windownumber) {
    browser
    sample03.backhome();
    return browser;
  };
};
