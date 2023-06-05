import { Locator, Page } from '@playwright/test';

export class VideoPage {
  readonly page: Page;
  readonly searchField: Locator;
  readonly searchButton: Locator;
  readonly serpListItems: Locator;
  readonly videoForFirstItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchField = page.locator('.search2__input').locator('input');
    this.searchButton = page.locator('.search2__button');
    this.serpListItems = page.locator('[role="listitem"]');
    this.videoForFirstItem = this.serpListItems.first().locator('video');
  }

  async goto() {
    await this.page.goto('/video');
  }

  async search(text: string) {
    await this.searchField.fill(text);
    await this.searchButton.click();
    await this.page.waitForURL(encodeURI(`https://yandex.ru/video/search?text=${text}`));
  }
}