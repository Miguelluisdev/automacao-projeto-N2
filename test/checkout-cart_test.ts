import { faker } from '@faker-js/faker';
const { I } = inject();
const checkoutPage = require('../pages/checkout');

Feature('Checkout-cart')


Before(({I}) => {
   I.amOnPage('/checkout-one')
})

Scenario('Preencher checkout com dados válidos', async  ({ I }) => {
  
   const formData = {
    firstName: 'boruto',
    lastName: 'charuto',
    companyName: 'Darius company',
    email: faker.internet.email(),
    zipcode: '123456',
    address: 'rua darius lannister rua 8888 cr',
    messages: faker.lorem.sentence(),
    country: 'usa', 
    city: 'Afghanistan', 
    saveCheck: true,
    paymentMethod: '#css'
  };

    await checkoutPage.fillCheckoutRegisterForm(I, formData);
 
}).tag('@checkout-Sucess');


After(({I}) => {
  console.log('testes de checkout/de produto realizados')
  I.clearCookie()  
})
