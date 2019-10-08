module.exports = function (browser) {
    this.goToTanmay = function() {
      browser
      .windowMaximize()
      .url('http://demo.tanmaysarkar.com/')
      .waitForElementVisible('body', 1000)
      return browser;
    };
  
    this.navigateToSample01Page = function() {
      browser
      .click('a[href="sample_01.html"]')
      .url(function(result) {
        this.assert.equal(result.value, 'http://demo.tanmaysarkar.com/sample_01.html', 'Url is the same');
        console.log(result.value);
      });
      browser
      .waitForElementVisible('#ts_first_name', 3000)
      .assert.containsText('.style1>strong', 'Testing')
      return browser;
    };
  
    this.navigateToSample02Page = function() {
      browser
      .click('a[href="sample_02.html"]')
      .url(function(result) {
        this.assert.equal(result.value, 'http://demo.tanmaysarkar.com/sample_02.html', 'Url is the same');
        console.log(result.value);
      });
      browser
      .waitForElementVisible('#ts_frame_01', 3000)
      .assert.containsText('h2', 'Testing')
      return browser;
    };
  
    this.navigateToSample03Page = function() {
      browser
      .click('a[href="sample_03.html"]')
      .url(function(result) {
        this.assert.equal(result.value, 'http://demo.tanmaysarkar.com/sample_03.html', 'Url is the same');
        console.log(result.value);
      });
      browser
      .waitForElementVisible('#ts_first_name', 3000)
      .assert.containsText('.style1>strong', 'Testing')
      return browser;
    };
  
    this.navigateToSample04Page = function() {
      browser
      .click('a[href="sample_04.html"]')
      .assert.containsText('.style1>strong', 'Testing')
      return browser;
    };
  
    this.navigateToSample05Page = function() {
      browser
      .click('a[target="_blank"]')
      return browser;
    };
  
    this.navigateToSample06Page = function() {
      browser
      .click('a[href="sample_06.html"]')
      .url(function(result) {
        this.assert.equal(result.value, 'http://demo.tanmaysarkar.com/sample_06.html', 'Url is the same');
        console.log(result.value);
      });
      browser
      .waitForElementVisible('#demo1', 3000)
      .assert.containsText('.style1>strong', 'Testing')
      return browser;
    };
  
    this.navigateToSample07Page = function() {
      browser
      .click('a[href="sample_07.html"]')
      .url(function(result) {
        this.assert.equal(result.value, 'http://demo.tanmaysarkar.com/sample_07.html', 'Url is the same');
        console.log(result.value);
      });
      return browser;
    };
  
    this.validateHeader = function() {
      browser
      .assert.containsText('.style1>strong', 'Testing')
      return browser;
    };
  
  };
  