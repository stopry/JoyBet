import { JoybetPage } from './app.po';

describe('joybet App', () => {
  let page: JoybetPage;

  beforeEach(() => {
    page = new JoybetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
