
Feature('detail-product')


Before(({I}) => {
   I.amOnPage('/product-details-one/5')
})


Scenario('verificar se os dados do produtos estão corretos', async  ({ I }) => {
  I.see('Fit-Flare Dress')
  I.see('Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat.')


  I.click('a.action.wishlist');
  I.click('a.action.compare');
  I.click('a.theme-btn-one.btn-black-overlay.btn_sm');




}).tag('detail-product');


After(({I}) => {
  console.log('testes de detalhes do produto')
  I.clearCookie()  
})
