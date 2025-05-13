import{Locator, Page,expect} from '@playwright/test'
class checkoutPage{
    private page : Page;
    private title : Locator;
    private firstName : Locator;
    private lastName : Locator;
    private postCode : Locator;
    private continueBtn : Locator;

    constructor(page)
    {
        this.page = page;
        this.title = page.locator('.title');
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postCode = page.locator('#postal-code');
        this.continueBtn = page.locator('#continue');
    }

    async verifyCheckoutPageTile()
    {
       await expect(this.title).toHaveText("Checkout: Your Information");
    }

    async inputCardInfo(firstName,lastName,postCode)
    {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postCode.fill(postCode);
    }
    async ClickContinue()
    {
        await this.continueBtn.click();
        await this.page.waitForLoadState('networkidle');
    }
}

export default checkoutPage;