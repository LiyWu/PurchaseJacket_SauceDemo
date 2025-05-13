import { Locator, Page,expect } from '@playwright/test';

class DashboardPage {
  private page: Page;
  private appLogo : Locator;
  private cartBtn : Locator;
  private menuBtn : Locator;
  private logoutBtn : Locator;

  constructor(page: Page) {
    this.page = page;
    this.appLogo= page.locator('.app_logo');
    this.cartBtn = page.locator('.shopping_cart_badge');
    this.menuBtn = page.locator('#react-burger-menu-btn');
    this.logoutBtn = page.locator('#logout_sidebar_link');
  }

  async verifyDashboardDisplayed(){
    expect(this.appLogo).toHaveText('Swag Labs');
  }

  async selectTheProduct(productID) {
    await this.page.locator(productID).click();
  }

  async navigateToOrders()
  {
    await this.cartBtn.click();
    await this.page.waitForLoadState('networkidle');
  }

  async logout()
  {
    await this.menuBtn.click();
    await this.logoutBtn.click();
  }
}

export default DashboardPage;