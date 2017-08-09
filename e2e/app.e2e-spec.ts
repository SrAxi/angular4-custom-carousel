import { Angular4CustomCarouselPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('angular4-custom-carousel App', () => {
  let page: Angular4CustomCarouselPage;

  beforeEach(() => {
    page = new Angular4CustomCarouselPage();
  });

  it('should change the display css value of the first image when clicking the next button',
    () => {
      page.navigateTo();
      // We are setting `waitForAngularEnabled` to `false` in order to avoid the tedious protractor error:
      // "Failed: Timed out waiting for asynchronous Angular tasks to finish after 11 seconds."
      browser.waitForAngularEnabled(false);
      const firstImage = element(by.id('image_0'));
      const nextButton = element(by.css('a.next'));
      expect(firstImage.getCssValue('display')).toBe('block');

      nextButton.click().then(function () {
        browser.waitForAngular();
        browser.sleep(1000).then(function () {
          expect(firstImage.getCssValue('display')).toBe('none');
        });
      });
    });

  it('should display welcome message', () => {
    expect(page.getTitle()).toEqual('Custom ng4 Carousel');
  });

  it('should have 4 images in the first carousel (JS)', () => {
    expect(page.countImages(1)).toEqual(4);
  });

  it('should have more than 3 images in the second carousel (CSS)', () => {
    expect(page.countImages(2)).toBeGreaterThan(3);
  });
});
