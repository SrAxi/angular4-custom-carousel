import { browser, by, element } from 'protractor';

export class Angular4CustomCarouselPage {
  // Navigate to root
  navigateTo() {
    return browser.get('/');
  }

  // Gets the title of the website
  getTitle() {
    return element(by.css('app-root nav.navbar div.container a')).getText();
  }

  // Counts the images on the carousel passed as parameter
  countImages(n: number) {
    if (n === 1) {
      return element(by.css('div.main-carousel div')).all(by.tagName('div.mySlides')).count();
    } else {
      return element(by.css('div.css-carousel-main div.css-carousel-container')).all(by.tagName('a')).count();
    }
  }
}
