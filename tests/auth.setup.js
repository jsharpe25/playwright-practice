import { test as setup } from "@playwright/test";
import { LoginPage } from "../pages/loginPage.js";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(process.env.SAUCE_USERNAME, process.env.SAUCE_PASSWORD);

  await page.context().storageState({ path: authFile });
});
