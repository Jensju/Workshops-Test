
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { navigateTo, getWhereIAm, getMenuChoiceElement, checkIfDescriptionContainsString, cheatIfNeeded } from './helpers.js'

//Receiveing a beer from the bartender
Given('that I have started the game by navigating to {string}', async function (url) {
  await this.gotoUrl(url);
  // Important: wait for the relevant DOM element(s) to exist
  // Same step tobe repeated in loose the game...
  await this.getByXPathWait('/descendant::*[@class="health"]//*[contains(text(), "50")]', 1000);
  await this.getWait('.choices ul li:nth-child(2)', 1000);
});

Given('that I have navigated to the position {string}', async function (to) {
  await navigateTo(this, to);
});

Given('that my position is {string}', async function (position) {
  expect(await getWhereIAm(this)).to.equal(position);
});

When('I wait long enough for the description to contain the text {string}', async function (partOfDescription) {
  // press wait repeatedly until the description contains a certain text
  while (!await checkIfDescriptionContainsString(this, partOfDescription, true)) {
    // cheat if the health is low, since each wait deteriorates the health
    // and we don't want flaky tests (that fail every once in a while)
    await cheatIfNeeded(this);
    // press wait
    let waitButton = await getMenuChoiceElement(this, 'Wait');
    await waitButton.click();
  }
});

Then('my hipster bag should contain {string}', async function (thing) {
  // get all the text in the hipster bag element
  let textInBag = await this.getText(await this.get('.bag-content'));
  // check if the string thing is part of the text
  expect(textInBag).to.contain(thing);
});

//Someone in the audience throws you a fiver 
Then('I click on the button {string}', async function (button) {
  let jamButton = await getMenuChoiceElement(this, button);
  await jamButton.click();
});

Then('your money inscreases to {float}', async function (expectedMoney) {
  let moneyElement = await this.get('.money .val');

  // Get the text content of the element
  let moneyText = await moneyElement.textContent();

  // Parse the text content to a float
  let moneyN = parseFloat(moneyText);

  // Now check that the parsed value matches the expected value
  expect(moneyN).to.equal(expectedMoney);
  console.log(moneyN, expectedMoney)
});

//I should give a beer to the barista
//Repeated from earlier steps.

//Win the game
When('the description contain the text {string}', async function (b) {
  let text = await checkIfDescriptionContainsString(this, b, true)
});

Then('I click repeatedly button {string} until I win', async function (button) {
  // continue to wait until we die
  while (await getWhereIAm(this) !== 'I won') {
    let menuChoiceElement = await getMenuChoiceElement(this, button);
    await menuChoiceElement.click();
  }
});

Then('my position should be {string}', async function (position) {
  expect(await getWhereIAm(this)).to.equal(position);
});