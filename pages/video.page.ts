import { Locator, Page } from '@playwright/test';
import { BASE_URL } from '../playwright.config';

export class VideoPage {
  readonly page: Page;
  readonly searchField: Locator;
  readonly searchButton: Locator;
  readonly previewItems: Locator;
  readonly videoForFirstItem: Locator;
  readonly previewImageSelector: string;

  constructor(page: Page) {
    this.page = page;
    this.searchField = page.locator('.search2__input').locator('input');
    this.searchButton = page.locator('.search2__button');
    this.previewItems = page.locator('.thumb-image');
    this.videoForFirstItem = this.previewItems.first().locator('video');
    this.previewImageSelector = '.serp-item__preview img';
  }

  async goto() {
    await this.page.goto('/video');
  }

  async search(text: string) {
    await this.searchField.fill(text);
    await this.searchButton.click();
    await this.page.waitForURL(encodeURI(`${BASE_URL}/video/search?text=${text}`));
  }

  async waitForPreviewImage() {
    await this.page.waitForFunction((selector: string) => (
      (document.querySelector(selector) as HTMLImageElement).complete === true
    ), this.previewImageSelector);
  }
}