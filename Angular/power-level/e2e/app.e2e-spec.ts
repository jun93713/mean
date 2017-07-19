import { PowerLevelPage } from './app.po';

describe('power-level App', () => {
  let page: PowerLevelPage;

  beforeEach(() => {
    page = new PowerLevelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
