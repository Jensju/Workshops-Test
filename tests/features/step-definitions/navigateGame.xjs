import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that I have started the game at {string}', async function (url) {
  await this.driver.get(url);
});

When('I click the Enter the Cafe-button', async function () {
  await this.driver.findElement(By.css('.choices li: nth - child(1)')).click();
});

Then('a text should appear containing Cloud Forest Cafe', async function () {
  let cafeText = await this.driver.wait(until.elementLocated)
    By.xpath("//div[contains(text(),'Cloud Forest Cafe')]")
    expect(cafeText).to.equals('Cloud Forest Cafe')
});