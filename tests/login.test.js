const wd = require("wd");

const config = {
  platformName: "Android",
  deviceName: "Android Emulator",
  app: __dirname + "/../apps/myapp.apk",
  automationName: "UiAutomator2"
};

const driver = wd.promiseChainRemote("http://localhost:4723/wd/hub");

describe("Login Flow", () => {
  before(async () => {
    await driver.init(config);
  });

  after(async () => {
    await driver.quit();
  });

  it("should log in successfully", async () => {
    const emailField = await driver.elementById("com.example:id/email");
    await emailField.sendKeys("test@example.com");

    const passwordField = await driver.elementById("com.example:id/password");
    await passwordField.sendKeys("password123");

    const loginButton = await driver.elementById("com.example:id/login_button");
    await loginButton.click();

    const homeScreen = await driver.waitForElementById("com.example:id/home_title", 5000);
    const text = await homeScreen.text();

    if (text !== "Welcome") {
      throw new Error("Login failed or welcome screen not found");
    }
  });
});
