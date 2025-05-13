import{Locator, Page,expect} from '@playwright/test'
class OrderReviewPage{
    private page:Page;
    private reviewtitle : Locator;
    private itemName :Locator ;
    private finishBtn : Locator;

    constructor(page)
    {
        this.page = page;
        this.reviewtitle = page.locator('.title');
        this.itemName = page.locator('.inventory_item_name');
        this.finishBtn = page.locator('#finish');
    }

    async verifyOrderReviewPageTitle()
    {
       await expect(this.reviewtitle).toHaveText("Checkout: Overview");
    }

    async verifyProdctName(productName)
    {
        await expect(this.itemName).toHaveText(productName);
    
    }
    async clickFinish()
    {
        await this.finishBtn.click();
        await this.page.waitForLoadState('networkidle');
    }
}

export default OrderReviewPage;