import { AngularZhihuDailyPage } from './app.po';

describe('angular-zhihu-daily App', () => {
  let page: AngularZhihuDailyPage;

  beforeEach(() => {
    page = new AngularZhihuDailyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
