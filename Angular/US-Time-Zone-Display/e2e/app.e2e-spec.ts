import { USTimeZoneDisplayPage } from './app.po';

describe('us-time-zone-display App', () => {
  let page: USTimeZoneDisplayPage;

  beforeEach(() => {
    page = new USTimeZoneDisplayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
