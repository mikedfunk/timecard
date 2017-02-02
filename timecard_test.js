/* global Feature, Scenario, pause */
const config = require('./config.json');

Feature('Timecard');

Scenario('Submit timecard', (I) => {
  I.amOnPage(config.loginUrl);
  I.fillField('usernameField', config.username);
  I.fillField('passwordField', config.password);
  I.click('Login');
  I.waitForText('US Project Self Service Time', 30);
  I.click('US Project Self Service Time');
  I.waitForText('Create TimeCard', 30);
  I.click('Create TimeCard');
  I.waitForText('Policy Documents', 30);
  I.selectOption('Template', 'Latest Submitted Timecard');
  I.click('Apply Template');
  I.fillField({ css: '[name="N11:Hours:0"]' }, '40');
  I.click('body');
  I.click('Continue');
  I.waitForText('Week Starting', 30);
  pause();
  // I.click('Submit');
});
