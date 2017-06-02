import { PracticaExamenPage } from './app.po';

describe('practica-examen App', () => {
  let page: PracticaExamenPage;

  beforeEach(() => {
    page = new PracticaExamenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
