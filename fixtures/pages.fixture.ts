import { test as base } from '@playwright/test';
import { VideoPage } from '../pages/video.page';

type PagesFixture = {
  videoPage: VideoPage;
};
export const test = base.extend<PagesFixture>({
  videoPage: async ({ page }, use) => {
    const videoPage = new VideoPage(page);
    await videoPage.goto();
    await use(videoPage);
  },
});