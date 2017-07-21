import { ProjectProductManagementPage } from './app.po';

describe('project-product-management App', () => {
  let page: ProjectProductManagementPage;

  beforeEach(() => {
    page = new ProjectProductManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
