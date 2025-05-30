
Feature('Cart-View')

Before(({I}) => {
   I.amOnPage('/cart')
})


Scenario('Remover um produto do carrinho', async  ({ I }) => {
  I.see('Fit-Flare Dress')
  I.click('.product_remove')
  I.fillField('input[type="number"]', '5');

  I.click('.cart_submit')
 pause()
 I.scrollTo('.checkout_btn')
 I.click('.checkout_btn')

}).tag('cart-view-remove');


After(({I}) => {
  console.log('testes de carrinho de compras  realizados')
  I.clearCookie()  
})
