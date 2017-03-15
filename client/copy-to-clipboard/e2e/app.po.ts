import { browser, element, by } from 'protractor';

export class CopyToClipboardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ctc-root h1')).getText();
  }
}
