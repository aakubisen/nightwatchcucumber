module.exports = function (browser) {
  var sample02 = browser.page.BaseContent();
  this.enterForm2Details = function(fname, lname, homeaddr,country,gender) {
    browser
    .frame('ts_frame_02')
    sample02.fillForm(fname, lname, homeaddr,country,gender);
    return browser;
  };

  this.frameSwitch = function() {
    browser
    .frame(null)
    return browser;
  };

  this.enterForm1Details = function(fname, lname, homeaddr,country,gender) {
    browser
    .frame('ts_frame_01')
    sample02.fillForm(fname, lname, homeaddr,country,gender);
    return browser;
  };

  this.backHomeFromSample02Page = function() {
    browser
    sample02.backhome();
    return browser;
  };
};
