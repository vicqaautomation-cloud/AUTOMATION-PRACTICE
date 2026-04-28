import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    async goToHome() {
        await this.navigateTo('/');
    }
    async clickLogin() {
        await this.page.click('a[href="/login"]');
    }
}