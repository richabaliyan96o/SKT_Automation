import { Page , Locator} from '@playwright/test';


export class LoginPageActions {
    
    private page: Page;
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    headerText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('//input[@id="username"]');
        this.passwordInput = page.locator('//input[@id="password"]');
        this.loginButton = page.locator('//input[@name="submitaccount"]');
        this.headerText = page.getByText('Please use your mySASKTEL account info.');
    }

    async navigateToLoginPage() {
        await this.page.goto('https://reachclient.prodb.skt.tv3cloud.com/htmlapp/epamclient/index.html'); 
    }

    async login(username: string, password: string) {
        await this.headerText.waitFor();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
