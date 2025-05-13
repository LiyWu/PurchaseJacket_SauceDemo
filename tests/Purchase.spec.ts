import {test,expect} from 'playwright/test';
import { customtest } from '../utils/test-base';
import POManager from '../pages/POManager';

customtest.describe('Authenticated User Tests', () => {
        
customtest('login and purchase',async({testDataForOrder,page})=>{
        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage(page);
        const dashboardPage = poManager.getDashBoardPage(page);
        const checkoutPage = poManager.getCheckoutPage(page);
        const cartPage = poManager.getCartPage(page);
        const orderReviewPage = poManager.getOrderReviewPage(page);
        const orderCompletePage = poManager.getOrderCompletePage(page);

        //Navigate to the website and login
        await loginPage.goto(testDataForOrder.url);
        await loginPage.login(testDataForOrder.username,testDataForOrder.password);

        //Select the product in dashboard
        await dashboardPage.verifyDashboardDisplayed();
        await dashboardPage.selectTheProduct(testDataForOrder.productID);
        await dashboardPage.navigateToOrders();

        //Chechout
        await cartPage.verifyProductIsDisplayed(testDataForOrder.productName);
        await cartPage.checkout();

        //input payment info
        await checkoutPage.verifyCheckoutPageTile();
        await checkoutPage.inputCardInfo(testDataForOrder.firstName,testDataForOrder.lastName,testDataForOrder.postCode);
        await checkoutPage.ClickContinue();

        //Review order
        await orderReviewPage.verifyOrderReviewPageTitle();
        await orderReviewPage.verifyProdctName(testDataForOrder.productName);
        await orderReviewPage.clickFinish();

        //Complete order
        await orderCompletePage.verifyOrderCompletePageTitle();
        await orderCompletePage.verifyCompleteMessage();
        await orderCompletePage.backToHome();

        //Logout
        await dashboardPage.verifyDashboardDisplayed();
        await dashboardPage.logout();
        await loginPage.verifyLoginPageDisplayed();

 })
})
