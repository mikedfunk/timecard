/* global actor, pause */
const config = require('./config.json')

module.exports = function () {
  return actor({
    amLoggedIn () {
      this.amOnPage(config.loginUrl)
      this.fillField('usernameField', config.username)
      this.fillField('passwordField', config.password)
      this.click('Login')
      this.waitForText('US Project Self Service Time', 30)
    },
    createATimecardFromTheLatestOne () {
      this.click('US Project Self Service Time')
      this.waitForText('Create TimeCard', 30)
      this.click('Create TimeCard')
      this.waitForText('Policy Documents', 30)
      this.selectOption('Template', 'Latest Submitted Timecard')
      this.click('Apply Template')
    },
    add40HoursInTheTimeField () {
      this.fillField({ css: '[name="N11:Hours:0"]' }, '40')
    },
    submitTheTimecard () {
      this.click('body')
      this.click('Continue')
      this.waitForText('Week Starting', 30)
      // commented out so you can verify before submitting
      pause()
      // this.click('Submit')
    }
  })
}
