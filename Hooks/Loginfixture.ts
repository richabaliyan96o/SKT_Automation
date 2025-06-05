import { test as base } from '@playwright/test';
import { LoginPageActions } from '../Pages/LoginPageKeywords';

type MyFixtures = {
  login: LoginPageActions;
};

export const test = base.extend<MyFixtures>({
  login: async ({ page }, use) => {
    const loginPage = new LoginPageActions(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('streamvendor3b', 'MediaKind1');
    await use(loginPage); 
  },
});
