import {Locator, Page,expect} from 'playwright/test'

class OrderCompletePage{

       private page:Page;
        private reviewtitle : Locator;
        private completeHead :Locator;
        private completeText : Locator;
        private backToHomeBtn : Locator;
        
        constructor(page)
        {
            this.page = page;
            this.reviewtitle = page.locator('.title');
            this.completeHead = page.locator('.complete-header');
            this.completeText = page.locator('.complete-text');
            this.backToHomeBtn = page.locator('#back-to-products');
        }
    
        async verifyOrderCompletePageTitle()
        {
           await expect(this.reviewtitle).toHaveText("Checkout: Complete!");
        }
    
        async verifyCompleteMessage()
        {
            await expect(this.completeHead).toHaveText("Thank you for your order!");
            await expect(this.completeText).toHaveText("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
        }
        async backToHome()
        {
            await this.backToHomeBtn.click();
        }
}
export default OrderCompletePage;
