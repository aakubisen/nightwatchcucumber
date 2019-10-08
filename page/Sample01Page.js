module.exports = function (browser) {
  var sample01 = browser.page.BaseContent();
  this.enterFormDetails = function(fname, lname, homeaddr,country,gender) {
    browser
    sample01.fillForm(fname, lname, homeaddr,country,gender);
    return browser;
  };

  this.backHomeFromSample01Page = function() {
    browser
    sample01.backhome();
    return browser;
  };
};
