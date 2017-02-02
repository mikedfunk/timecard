/* global Feature, Scenario, pause */
const config = require('./config.json');

Feature('Timecard');

Scenario('Submit timecard', (I) => {
  I.amOnPage(config.loginUrl);
  I.fillField('usernameField', config.username);
  I.fillField('passwordField', config.password);
  I.click('Login');
  I.see('Oracle Applications Home Page');
  // I.click('US Project Self Service Time');
  // I.click('Create TimeCard');
  I.amOnPage(config.createTimecardUrl);
  I.see('Policy Documents');
  I.selectOption('Template', 'Latest Submitted Timecard');
  I.click('Apply Template');
  I.fillField('N11:Hours:0', '40');
  I.click('body');
  I.click('Continue');
  I.see('Week Starting');
  pause();
  // I.click('Submit');
});
