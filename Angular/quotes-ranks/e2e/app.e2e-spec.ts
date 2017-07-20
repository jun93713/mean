import { QuotesRanksPage } from './app.po';

describe('quotes-ranks App', () => {
  let page: QuotesRanksPage;

  beforeEach(() => {
    page = new QuotesRanksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
