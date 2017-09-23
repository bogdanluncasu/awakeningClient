import { AwakeningClientPage } from './app.po';

describe('awakening-client App', () => {
  let page: AwakeningClientPage;

  beforeEach(() => {
    page = new AwakeningClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
