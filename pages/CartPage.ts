import{Locator, Page,expect} from '@playwright/test'
class CartPage{
    private page:Page;
    private checkoutBtn : Locator;
    private productSection : Locator;
    
    constructor(page)
    {
        this.page = page;
        this.productSection = page.locator('.inventory_item_name');
        this.checkoutBtn = page.locator('#checkout');
    }

    async verifyProductIsDisplayed(productName)
    {
       await expect(this.productSection).toHaveText(productName);
    }

    async checkout()
    {
        await this.checkoutBtn.click();
        await this.page.waitForLoadState('networkidle');
    }
}

export default CartPage;