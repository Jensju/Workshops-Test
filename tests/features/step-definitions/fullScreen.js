import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

//this.driver.get (selenium) = Cy.visit (in Cypress)

Given('that I have started the game at {string}', async function (url) {
  await this.driver.get(url);
});

When('I click the full screen button', async function () {
  await this.driver.findElement(By.css('.go-fullscreen')).click();
  await this.driver.sleep(2000)
})

Then('I should get a full screen mode', async function () {
  let iElement = await this.driver.findElement(By.css('i'));
  expect(iElement).to.not.have.property('::before');
  // await this.driver.sleep(1000)
  // await this.action.sendKeys(Key.ESCAPE).trigger()
});



// Exampel code to use if something eventually apear
// this.driver.wait(until.elementLocated("attach to something"), 1000)