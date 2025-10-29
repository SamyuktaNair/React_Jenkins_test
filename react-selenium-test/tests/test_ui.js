import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';

describe('React App UI Test', function () {
  this.timeout(30000);

  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('should load the homepage', async function () {
    await driver.get('http://localhost:5173/');
    const title = await driver.getTitle();
    assert.strictEqual(title, 'React App');
  });
});

