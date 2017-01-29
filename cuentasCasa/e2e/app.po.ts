import { browser, element, by } from 'protractor';

export class CuentasCasaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root md-toolbar')).getText();
  }
  getInicioCardText(){
    return element(by.css('app-root div app-inicio md-card')).getText();
  }
}
