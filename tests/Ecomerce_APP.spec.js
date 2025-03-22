const { test, expect } = require("@playwright/test");
const { chromium } = require("playwright-extra");
const stealth = require("playwright-extra-plugin-stealth")();
const SignUP = require("../Modules/SignUp");
const LOGIN = require("../Modules/Login");
const VERIFICATION = require("../Modules/Verification");

chromium.use(stealth);

test("Ecommerce Web App - Signup, Login, and Verification", async ({ page }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:119.0) Gecko/20100101 Firefox/119.0",
    viewport: { width: 1280, height: 800 },
  });

  const newPage = await context.newPage();
  console.log("Opening the eCommerce demo page...");

  await newPage.goto("https://www.opencart.com/index.php?route=cms/demo", {
    waitUntil: "domcontentloaded",
  });

  console.log("Waiting for Cloudflare verification...");

  // Handle Cloudflare verification wait loop
  for (let i = 0; i < 20; i++) {
    const isVerifying = await newPage.locator("text=Verifying you are human").isVisible();
    if (!isVerifying) {
      console.log("Cloudflare verification passed!");
      break;
    }
    await newPage.waitForTimeout(3000);
  }

  console.log("Starting the signup process...");
  const signup = new SignUP(newPage);
  await signup.Checkheading1();
  await signup.SignUpprocess();
  await signup.Checkheading2();

  console.log("Proceeding with login...");
  const login = new LOGIN(newPage);
  await login.LogIN();

  console.log("Handling verification step...");
  const verification = new VERIFICATION(newPage);
  await verification.verification();

  console.log("Test execution completed successfully.");
  await browser.close();
});
