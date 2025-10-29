const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Vite + React App UI Test', function () {
  this.timeout(30000);
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('should open Vite React app homepage', async () => {
    await driver.get('http://localhost:5173');
    const title = await driver.getTitle();
    expect(title).to.include('Vite + React');
  });
});
