import { expect } from '@playwright/test';
import { test } from '../fixtures/pages.fixture'

test('check preview video', async ({ videoPage }) => {
  await videoPage.search('ураган');
  await expect(videoPage.videoForFirstItem).toBeHidden();
  await videoPage.waitForPreviewImage();
  const previewFirsItem = videoPage.previewItems.first();
  const previewFirst = await previewFirsItem.screenshot();
  await previewFirsItem.hover();
  await expect(videoPage.videoForFirstItem).toBeInViewport();
  await expect(videoPage.videoForFirstItem).toHaveJSProperty('paused', false);
  await expect(videoPage.videoForFirstItem).toHaveJSProperty('ended', false);
  const previewSecond = await previewFirsItem.screenshot();
  expect(previewFirst.toString() === previewSecond.toString()).toBeFalsy();
});