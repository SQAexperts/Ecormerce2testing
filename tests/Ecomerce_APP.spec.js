const { test, expect } = require("@playwright/test");
const { chromium } = require("playwright-extra");
const stealth = require("playwright-extra-plugin-stealth")();
const SignUP = require("../Modules/SignUp");
const LOGIN = require("../Modules/Login");
const VERIFICATION = require("../Modules/Verification");

chromium.use(stealth);

test("Testing Ecommerce Web App", async ({ page }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:119.0) Gecko/20100101 Firefox/119.0",
    viewport: { width: 1280, height: 800 },
  });
  const newPage = await context.newPage();

  await newPage.goto("https://www.opencart.com/index.php?route=cms/demo", {
    waitUntil: "domcontentloaded",
  });

  console.log("Waiting for Cloudflare verification...");

  // Handle Cloudflare verification wait
  for (let i = 0; i < 20; i++) {
    if (!(await newPage.locator("text=Verifying you are human").isVisible())) {
      console.log("Verification passed!");
      break;
    }
    await newPage.waitForTimeout(3000);
  }

  const Signup = new SignUP(newPage);
  const login = new LOGIN(newPage);
  const verification = new VERIFICATION(newPage);

  await Signup.Checkheading1();
  await Signup.SignUpprocess();
  await Signup.Checkheading2();
  await login.LogIN();
  await verification.verification();

  await browser.close();
});