import { NameComponentPage } from './app.po';

describe('name-component App', function() {
  let page: NameComponentPage;

  beforeEach(() => {
    page = new NameComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
