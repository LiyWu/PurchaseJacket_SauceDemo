import { Locator,Page,expect } from '@playwright/test';

class LoginPage {
  private page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }
  async verifyLoginPageDisplayed()
  {
    expect(this.loginButton).toBeVisible();
  }

  async goto(url)
  {
    await this.page.goto(url);
  }
}

export default LoginPage;