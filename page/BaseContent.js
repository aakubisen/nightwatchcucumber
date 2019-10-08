module.exports = function (browser) {
  this.fillForm = function(fname, lname, homeaddr,country,gender) {
    browser
    .setValue('#ts_first_name', fname)
    .setValue('#ts_last_name', lname)
    .setValue('#ts_address', homeaddr)
    .getValue('#ts_first_name', function(result) {
      this.assert.equal(result.value, fname);
    });
    browser
    .click('select option[value="0"]')
    .assert.containsText('#ts_country', country)
    .click("input[value='" + gender + "']")
    .pause(3000)
    .click('#ts_checkbox1')
    .click('#ts_checkbox2')
    return browser;
  };

  this.backhome = function() {
    browser
    .click('a[href="index.php"]')
    .waitForElementVisible('.style1>strong', 3000)
    return browser;
  };

  this.windowHandle= function() {
    browser
    .window_handles(function(result) {
      var temp = result.value.length;
      console.log("Number of window handles is now " + temp);         // Since two windows are open we need to get the window ids
      this.switchWindow(result.value[temp - 1]);               // and switch focus to the new window so that the next command is run against it
    });
    return browser;
  };

};
