import { MyfirstappPage } from './app.po';

describe('myfirstapp App', () => {
  let page: MyfirstappPage;

  beforeEach(() => {
    page = new MyfirstappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
