import { Given, When, Then } from '@cucumber/cucumber';
import { By } from 'selenium-webdriver';
import { expect } from 'chai';
import { openCafe, clickButton } from './commonSteps.js'; 


Given('that I am inside the bar', async function () {
  await openCafe(this.driver); // use the exported function
  await clickButton(this.driver, "go north");
  await clickButton(this.driver, "go east");
});

Then('I should see a help message displayed', async function () {
  const helpTextElement = await this.driver.findElement(By.css('p.description'));
  const textContent = await helpTextElement.getText();
  expect(textContent).to.include("You're a hipster");
});

Then('I should see a button labeled {string}', async function (buttonLabel) {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonLabel.toLowerCase()}")]`;
  const button = await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  const isDisplayed = await button.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('I should be outside the cafe', async function () {
  const imageElement = await this.driver.findElement(By.css('img.big-image'));
  const srcImage = await imageElement.getAttribute('src');
  expect(srcImage).to.contain('cloud-forest-cafe.jpg');
});