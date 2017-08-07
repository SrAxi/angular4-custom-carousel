import { Angular4CustomCarouselPage } from './app.po';

describe('angular4-custom-carousel App', () => {
  let page: Angular4CustomCarouselPage;

  beforeEach(() => {
    page = new Angular4CustomCarouselPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
