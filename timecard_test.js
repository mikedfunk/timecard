/* global Feature, Scenario */

Feature('Timecard')

Scenario('Submit timecard', (I) => {
  I.amLoggedIn()
  I.createATimecardFromTheLatestOne()
  I.add40HoursInTheTimeField()
  I.submitTheTimecard()
})
