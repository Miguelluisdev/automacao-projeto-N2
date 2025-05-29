const navigation = require('../pages/navigate')

Feature('navigate-website');

Before(({I}) => {
    I.amOnPage('/')
})

Scenario('Navegação pelo MenuBanner', async ({I}) => {
 await navigation.fillNavigationHeaderBanner(I)
}).tag('menu-banner');

Scenario('Navegação pelo MainMenu', async ({I}) => {
  await navigation.fillNavigationHeader(I)
}).tag('menu-main');

Scenario('Navegação pela Home bottom and top', async ({I}) => {
  await navigation.fillNavigationFooter(I)
}).tag('footer-menu');


After(() => {
  console.log('testes de navegação/menu header realizados')
})