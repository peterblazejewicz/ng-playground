import { CopyToClipboardPage } from './app.po';

describe('copy-to-clipboard App', () => {
  let page: CopyToClipboardPage;

  beforeEach(() => {
    page = new CopyToClipboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ctc works!');
  });
});
