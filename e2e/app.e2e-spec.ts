import { SpaceDiscoInfernoPage } from './app.po';

describe('space-disco-inferno App', function() {
  let page: SpaceDiscoInfernoPage;

  beforeEach(() => {
    page = new SpaceDiscoInfernoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
