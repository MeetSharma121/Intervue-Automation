# Intervue Selenium Automation Test 🎬

This project contains a Selenium automation script designed to test the Intervue.io website. The script performs a comprehensive login-to-logout flow with visible UI interactions, simulating a real user’s journey through the platform.

## Overview

The automation script is built using Selenium WebDriver with Node.js, enabling browser automation for testing purposes. It covers key user actions such as logging in, searching, navigating the dashboard, and logging out, ensuring the core functionalities of the site work as expected.

## Video Demo Section 🎥

Running the script locally provides a video-like demo of the automation flow, showcasing:

- Opening the Intervue.io website
- Clicking on "Login"
- Switching to the company login window
- Entering work email and password
- Clicking the login button
- Waiting for the dashboard to load
- Searching for keywords using the search bar and shortcut keys
- Clicking on the profile image/icon
- Logging out
- Hovering over menu items like Products, Solutions, and Resources

This visual demonstration helps in understanding the user experience and verifying UI elements.

## Tech Stack 🛠️

- **Node.js**: JavaScript runtime environment for executing the automation script.
- **Selenium WebDriver**: Browser automation framework used to control Chrome browser.
- **ChromeDriver**: WebDriver implementation for Chrome, enabling browser control.
- **JavaScript (ES6)**: Language used to write the automation script.
- **npm**: Package manager to install dependencies like selenium-webdriver.

## How to Run 🏃‍♂️

1. Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
2. Open your terminal or command prompt.
3. Navigate to the project directory:
   ```
   cd intervue-selenium-test
   ```
4. Install the required dependencies:
   ```
   npm install selenium-webdriver
   ```
5. Run the test script:
   ```
   node test.cjs
   ```
6. Watch the Chrome browser launch and perform the automated steps visibly.

## Script Flow Summary 🎬

- Go to https://www.intervue.io
- Click on “Login”
- Click on “Login for companies”
- Enter work email and password  
  Email: neha@intervue.io  
  Password: Neha@567intervue
- Click Login with email button
- Wait for dashboard to load
- Use the top search bar, type: fullstack
- Use shortcut Command + K (or Ctrl + K) to search
- Click on the profile image/icon
- Select Logout
- Hover over "Products", "Solutions", and "Resources" menu items
- Confirm return to login page

## Additional Notes 📌

- The script includes deliberate pauses (`driver.sleep`) after each step to make the automation flow visible and easy to follow.
- The script maximizes the browser window for better visibility.
- Error handling is included to catch and log any issues during execution.
- The selectors used in the script are based on the current UI and may need updates if the website changes.

## Happy Coding! 😊
