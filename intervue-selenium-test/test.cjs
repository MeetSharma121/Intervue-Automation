const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function intervueTest() {
  let options = new chrome.Options();
  // Run with visible Chrome window
  // options.addArguments('--headless'); // Remove comment if you want to run headless

  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    //Open the website
    await driver.manage().window().maximize();
    console.log("Opening Intervue.io...");
    await driver.get('https://www.intervue.io/');
    await driver.sleep(3000);

    //Click on "Login"
    console.log("Clicking Login...");
    await driver.wait(until.elementLocated(By.linkText('Login')), 5000);
    await driver.findElement(By.linkText('Login')).click();
    await driver.sleep(3000);

    // switch to the new window
    const originalWindow = await driver.getWindowHandle();
    const allWindows = await driver.getAllWindowHandles();
    for (const handle of allWindows) {
      if (handle !== originalWindow) {
        await driver.switchTo().window(handle);
        break;
      }
    }
    
    // login for companies
    console.log("Switching to company login...");
    // let loginBtn = await driver.findElement(By.css('a[href="/login"]'));
    let loginBtn = await driver.findElement(By.xpath('//a[@href="/login"]'));
    await loginBtn.click();
    await driver.sleep(3000);

    //Enter email and password
    console.log("Entering login credentials...");
    await driver.wait(until.elementLocated(By.id('login_email')), 5000);
    await driver.findElement(By.id('login_email')).sendKeys('neha@intervue.io');
    await driver.sleep(2000);
    await driver.findElement(By.id('login_password')).sendKeys('Neha@567intervue');
    await driver.sleep(2000);

    //Click the Login button
    console.log("Submitting login...");
    await driver.findElement(By.css('button[type="submit"]')).click();
    await driver.sleep(5000); // Wait for dashboard to load

    //Search for keyword
    console.log("Typing 'fullstack' into the search bar...");
    const searchInput = await driver.wait(
      until.elementLocated(By.css('input[type="search"], input[placeholder*="Search"]')),
      10000
    );
    await searchInput.sendKeys('fullstack');
    await driver.sleep(3000);

    // command + k search 
    let isMac = process.platform === 'darwin'; // Check if it's macOS
    let modifier = isMac ? Key.COMMAND : Key.CONTROL;
    await driver.actions()
      .keyDown(modifier)  // Hold down Command or Ctrl
      .sendKeys('k')      // Press the 'K' key
      .keyUp(modifier)    // Release the modifier key
      .sendKeys('fullstack') // Type 'fullstack'
      .pause(1000)        
      .sendKeys(Key.RETURN)  // Press Enter
      .pause(5000)         // Pause for a moment
      .sendKeys(Key.ESCAPE)
      .perform();         // Execute the action

    console.log("Shortcut Command + K executed");
    
    // profile menu
    console.log("Clicking on profile image...");
    const profileIcon = await driver.wait(
      until.elementLocated(By.className('userAvatar Avatar__AvatarDiv-sc-1jdwvse-0 fYvxTb')),
      10000
    );
    await profileIcon.click();
    await driver.sleep(2000);

    // Logout
    console.log("Logging out...");
    let logoutLink = await driver.findElement(By.css('a[href="/logout"]'));
    await logoutLink.click();


    // hover over "products"
    console.log("Hovering over 'Products'...");
    let productsElement = await driver.wait(until.elementLocated(By.id('products')));
    await driver.actions({ bridge: true }).move({ origin: productsElement }).perform();
    await driver.sleep(3000);

    //hover over "solutions"
    console.log("Hovering over 'Solutions'...");
    let solutionsElement = await driver.wait(until.elementLocated(By.id('solutions')));
    await driver.actions({ bridge: true }).move({ origin: solutionsElement }).perform();
    await driver.sleep(3000);

    // hover over "resources"
    console.log("Hovering over 'Resources'...");
    let resourcesElement = await driver.wait(until.elementLocated(By.id('resources')));
    await driver.actions({ bridge: true }).move({ origin: resourcesElement }).perform();
    await driver.sleep(3000);

    // Confirm return to login page
    console.log("Logout successful. Verifying Login page...");
    await driver.wait(until.elementLocated(By.id('products')), 10000);

    console.log("✅ Test completed successfully!");

  } catch (error) {
    console.error("❌ Test failed:", error);
  } finally {
    await driver.quit();
  }
})();
