import base from '@playwright/test';

export const customtest = base.extend<{
    testDataForOrder: {
        url:string
        username: string;
        password: string;
        productID: string;
        productName: string;
        firstName: string;
        lastName: string;
        postCode: string;
    };
}>({
    testDataForOrder: async ({}, use) => {
        const testDataGroup = {
            url: "https://www.saucedemo.com/",
            username: "standard_user",
            password: "secret_sauce",
            productID: "#add-to-cart-sauce-labs-fleece-jacket", 
            productName: "Sauce Labs Fleece Jacket",
            firstName: "test",
            lastName: "test",
            postCode: "2000"
        };
        await use(testDataGroup); // Provide testDataGroup as fixture data
    },
});