import { CuentasCasaPage } from './app.po';

describe('cuentas-casa App', function() {
  let page: CuentasCasaPage;

  beforeEach(() => {
    page = new CuentasCasaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Gastos caseros');
  });

  it('Miramos que se cargue correctamente la pagina de inicio', () => {
    page.navigateTo();
    expect(page.getInicioCardText()).toEqual('Se encarga de controlar los cargos caseros.');
  });
});
