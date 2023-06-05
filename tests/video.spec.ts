import { expect } from '@playwright/test';
import { test } from '../fixtures/pages.fixture'

test('check preview video', async ({ videoPage }) => {
  await videoPage.search('ураган');
  await expect(videoPage.videoForFirstItem).toBeHidden();
  await videoPage.serpListItems.first().hover();
  await expect(videoPage.videoForFirstItem).toBeVisible();
  await expect(videoPage.videoForFirstItem).toHaveAttribute('autoplay', 'autoplay');
});