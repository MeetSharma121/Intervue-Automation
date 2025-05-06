
# 🚀 Intervue Selenium Automation Test 🎬

This project features a **Selenium automation script** designed to test the **[Intervue.io](https://www.intervue.io)** platform. The script performs a **complete login-to-logout flow**, replicating a real user’s experience through smooth UI interactions and validations.

---

## 🧭 Overview

This automation script is crafted using **Selenium WebDriver with Node.js**, enabling seamless browser control for UI testing. It covers crucial user actions such as:

✨ Logging in  
🔍 Searching via UI & shortcuts  
📊 Navigating the dashboard  
👤 Profile interaction  
🚪 Logging out

This ensures that the **core functionalities** of Intervue.io are operating flawlessly.

---

## 🎥 Video Demo  
[📺 Watch the Demo](https://drive.google.com/file/d/1b0atLNZiyMJ-UdTLORsRDrsX4O8TdHVj/view?usp=share_link)

The automation script acts like a screen recording of the real user experience, showcasing:

- 🌐 Opening the Intervue.io website  
- 🔐 Clicking “Login” → Selecting “Login for companies”  
- 📧 Entering credentials and logging in  
- ⌛ Waiting for the dashboard  
- 🔎 Searching using input and keyboard shortcuts  
- 👤 Clicking the profile icon and logging out  
- 🖱️ Hovering over “Products”, “Solutions”, and “Resources”  

---

## 🛠️ Tech Stack

| Tool                 | Description                                 |
|----------------------|---------------------------------------------|
| **Node.js**          | Runtime for executing the JavaScript script |
| **Selenium WebDriver** | For browser automation                   |
| **ChromeDriver**     | WebDriver implementation for Chrome         |
| **JavaScript (ES6)** | Modern scripting language                   |
| **npm**              | Package manager for installing dependencies |

---

## 🏃‍♂️ How to Run the Script

1. 📥 [Download Node.js](https://nodejs.org/) and install it.
2. 🖥️ Open your terminal or command prompt.
3. 📂 Navigate to the project directory:
   ```bash
   cd intervue-selenium-test
   ```
4. 📦 Install required packages:
   ```bash
   npm install selenium-webdriver
   ```
5. ▶️ Run the script:
   ```bash
   node test.cjs
   ```
6. 👀 Watch Chrome launch and perform all actions visibly!

---

## 🧾 Script Flow Summary

1. 🌐 Visit [https://www.intervue.io](https://www.intervue.io)
2. 🔐 Click on **“Login”**
3. 🏢 Select **“Login for companies”**
4. ✍️ Enter credentials:  
   - **Email**: `neha@intervue.io`  
   - **Password**: `Neha@567intervue`
5. 🚪 Click **“Login with Email”**
6. 📊 Wait for dashboard to fully load
7. 🔎 Use the search bar, type `fullstack`
8. ⌨️ Use `Cmd + K` (Mac) or `Ctrl + K` (Windows/Linux)
9. 👤 Click the profile icon and select **Logout**
10. 🧭 Hover over top menu items: **Products**, **Solutions**, and **Resources**
11. ✅ Ensure redirection to the login page

---

## 📌 Additional Notes

- 💤 **Deliberate pauses** using `driver.sleep()` ensure smooth and visible flow
- 🖥️ The browser window is maximized for clarity
- ⚠️ Basic **error handling** is implemented
- 🔍 **Selectors** are based on the current UI and may require updates with site changes

---

## 🎉 Happy Testing & Happy Coding! 😊  

Feel free to ⭐ this project, share feedback, or contribute improvements!
