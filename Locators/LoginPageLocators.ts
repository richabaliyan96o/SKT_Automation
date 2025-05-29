import { Page, Locator } from '@playwright/test';

export class LoginPageLocators {

    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    headerText: Locator;


    constructor(public page: Page) {
        this.usernameInput = page.locator('//input[@id="username"]');
        this.passwordInput = page.locator('//input[@id="password"]');
        this.loginButton = page.locator('//input[@name="submitaccount"]');
        this.headerText = page.getByText('Please use your mySASKTEL account info.');
    
    }
}
