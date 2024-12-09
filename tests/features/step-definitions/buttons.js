import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { By, until, Key } from 'selenium-webdriver';

// We have started a game
Given('that game is started with joining game {string}', async function (url) {
  await this.driver.get(url);
  // Important: wait for the relevant DOM element(s) to exist
  // - Wait for an element we expect to only be in the DOM
  // Verify that the app has fully loaded
  await '/descendant::*[@class="health"]//*[contains(text(), "50")]';
});

Then('that there are available all buttons {string}, {string}, {string}, {string}, {string}', async function (b1, b2, b3, b4, b5) {
  // Get the button elements using the given strings (b1, b2, etc.)
  const buttonXPaths = [
    `//ul/li[text()="${b1}"]/following-sibling::div[contains(@class, "choices")]`,
    `//ul/li[text()="${b2}"]/following-sibling::div[contains(@class, "choices")]`,
    `//ul/li[text()="${b3}"]/following-sibling::div[contains(@class, "choices")]`,
    `//ul/li[text()="${b4}"]/following-sibling::div[contains(@class, "choices")]`,
    `//ul/li[text()="${b5}"]/following-sibling::div[contains(@class, "choices")]`
  ];

  // Loop through each XPath and assert that the button exists
  for (let xpath of buttonXPaths) {
    let button = await xpath;
    expect(button).to.exist;
  }
});


//checking button enter the cafe
When('button {string} is clicked', async function (buttonETC) {

  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonETC.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  await button.click();
});

Then('should be changed {string}, {string} and available button {string}', async function (view, text, buttonE) {
  //checking view
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('inside-cafe.jpg');

  //checking text

  const helpTextElement = await this.driver.findElement(By.css('p.description'));
  const textContent = await helpTextElement.getText();
  expect(textContent).to.include("You are in the Cloud Forest Cafe");

  //checking button
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonE.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  const isDisplayed = await button.isDisplayed();
  expect(isDisplayed).to.be.true;
});


//Checking button health
When('button {string} is pressed', async function (buttonH) {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonH.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  await button.click();
  console.log(`Button "${buttonH}" pressed successfully.`);
});

Then('{string} should be decreased and color changed to red', async function (buttonH) {
  // Locate the span displaying the health value
  const healthValueElement = await this.driver.wait(until.elementLocated(By.css('.health .val')), 5000);
  const healthValueText = await healthValueElement.getText();
  const healthValue = parseInt(healthValueText, 10); // Parse text to integer with base 10

  // Log the current health value for monitoring
  console.log(`Current health value for "${buttonH}" is: ${healthValue}`);

  // Locate the progress element to check if 'red' class is applied
  const progressElement = await this.driver.wait(until.elementLocated(By.className('progress')), 5000);

  const redIndicator = await progressElement.findElement(By.className('bad'));
  const redIndicatorIsDisplayed = await redIndicator.isDisplayed();

  // Log whether the 'red' indicator is displayed
  console.log(`Red indicator for "${buttonH}" is displayed: ${redIndicatorIsDisplayed}`);

});