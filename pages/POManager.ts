import { Page } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import CheckoutPage from '../pages/CheckoutPage';
import CartPage from '../pages/CartPage';
import OrderReviewPage from '../pages/OrderReviewPage';
import OrderCompletePage from '../pages/OrderCompletePage';

class POManager{
    private page:Page;
    private loginpage;
    private dashboardPage;
    private checkoutPage;
    private cartPage;
    private orderReviewPage;
    private orderCompletePage;
 
    constructor(page)
    {
        this.page=page;
        this.loginpage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.cartPage = new CartPage(page);
        this.orderReviewPage = new OrderReviewPage(page);
        this.orderCompletePage = new OrderCompletePage(page);
    }

    getLoginPage(page){
        return this.loginpage;
    }

    getDashBoardPage(page){
        return this.dashboardPage;
    }
    
    getCheckoutPage(page){
        return this.checkoutPage;
    }

    getCartPage(page){
        return this.cartPage
    }

    getOrderReviewPage(page){
        return this.orderReviewPage;
    }

    getOrderCompletePage(page){
        return this.orderCompletePage;
    }
   
}

export default POManager;