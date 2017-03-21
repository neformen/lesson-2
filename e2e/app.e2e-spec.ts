import { Homework2Page } from './app.po';

describe('homework2 App', () => {
  let page: Homework2Page;

  beforeEach(() => {
    page = new Homework2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
