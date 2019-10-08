require('nightwatch-cucumber')({
    cucumberArgs: ['--require', 'timeout.js', '--require',
     'features/step_definitions', 'features']
  })

  module.exports = {
    "src_folders" : ["tests"],
    output_folder: 'reports',
    custom_assertions_path: '',
    live_output: false,
    disable_colors: false,
    page_objects_path: 'page',
    selenium: {
      start_process: true,
      server_path: "./bin/selenium.jar",
      log_path: '',
      host: '127.0.0.1',
      port: 4444,
      "cli_args" : {
        "webdriver.chrome.driver" : "./bin/chromedriver.exe",
        "webdriver.ie.driver" : "",
        "webdriver.gecko.driver" : "",
        "webdriver.firefox.profile" : ""
      }
    },

    test_settings: {
        default: {
            launch_url: "",
            silent: true,
            desiredCapabilities: {
                browserName: "chrome",
                chromeOptions: {
                    args: ["window-size=1280,800", "disable-web-security", "test-type"]
            },
            javascriptEnabled: true,
            acceptSslCerts: true
          }
        }
      }
        


    
  }
  