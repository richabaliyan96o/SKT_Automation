import { Page } from '@playwright/test';
import { LoginPageLocators } from '../Locators/LoginPageLocators';

export class LoginPageActions {
    private page: Page;
    private locators: LoginPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new LoginPageLocators(page);
    }

    async navigateToLoginPage() {
        await this.page.goto('https://reachclient.prodb.skt.tv3cloud.com/htmlapp/epamclient/index.html'); 
    }

    async login(username: string, password: string) {
        await this.locators.headerText.waitFor();
        await this.locators.usernameInput.fill(username);
        await this.locators.passwordInput.fill(password);
        await this.locators.loginButton.click();
    }
}
