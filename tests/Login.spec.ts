import { test, expect } from '@playwright/test';
import { LoginPageActions } from '../Keywords/LoginPageKeywords';

test('Login with valid credentials', async ({ page }) => {
    test.setTimeout(60000);
    const login = new LoginPageActions(page);
    await login.navigateToLoginPage();
    await login.login('streamvendor3b', 'MediaKind1');

});
