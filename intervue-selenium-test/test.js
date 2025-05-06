import { Builder, By, Key, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

(async function intervueTest() {
  let options = new chrome.Options();
  options.headless(false);

  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // Open the website
    await driver.get('https://www.intervue.io');

    // Click on the login button (assuming a login button/link is present)
    await driver.wait(until.elementLocated(By.linkText('Login')), 10000);
    await driver.findElement(By.linkText('Login')).click();

    // Wait for login form to appear
    await driver.wait(until.elementLocated(By.name('email')), 10000);

    // Enter email
    await driver.findElement(By.name('email')).sendKeys('neha@intervue.io');

    // Enter password
    await driver.findElement(By.name('password')).sendKeys('Neha@567intervue');

    // Submit login form (assuming a button with type submit)
    await driver.findElement(By.css('button[type="submit"]')).click();

    // Wait for search bar to appear after login
    await driver.wait(until.elementLocated(By.css('input[type="search"], input[placeholder*="Search"]')), 10000);

    // Type "hello" in the search bar
    let searchInput = await driver.findElement(By.css('input[type="search"], input[placeholder*="Search"]'));
    await searchInput.sendKeys('hello', Key.RETURN);

    // Wait for some search results or page update (optional)
    await driver.sleep(3000);

    // Logout (assuming a logout link or button is available)
    // This selector may need adjustment based on actual UI
    await driver.wait(until.elementLocated(By.linkText('Logout')), 10000);
    await driver.findElement(By.linkText('Logout')).click();

    // Wait for logout to complete (e.g., login button reappears)
    await driver.wait(until.elementLocated(By.linkText('Login')), 10000);

  } finally {
    await driver.quit();
  }
})();
