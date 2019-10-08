const {defineSupportCode} = require('cucumber')

defineSupportCode(({setDefaultTimeout}) => {
  setDefaultTimeout(50 * 1000)
})
