import { Ang2formvalPage } from './app.po';

describe('ang2formval App', function() {
  let page: Ang2formvalPage;

  beforeEach(() => {
    page = new Ang2formvalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
