import { faker } from "@faker-js/faker";
const autenticatePage = require('../pages/Autenticate')

Feature('create-account');

Before(({I}) => {
   I.amOnPage('/register')
})

Scenario('Cadastro com sucesso', async  ({ I }) => {
     const userData = {
    username: 'fgearaghrt',
    email: faker.internet.email(),
    password: '123456'
  };
  await autenticatePage.fillRegistrationForm(I , userData)
}).tag('@register-Sucess');

Scenario('Cadastro com nome em branco', async ({ I }) => {
      const userData = {
    username: '',
    email: faker.internet.email(),
    password: '123456'
  };
  await autenticatePage.fillRegistrationForm(I , userData)
   I.see('O campo nome deve ser prenchido')
}).tag('@register-Name');

Scenario('Cadastro com email invalido', async  ({ I }) => {
        const userData = {
    username: 'vrvrvsadad',
    email: 'darisgmail',
    password: '123456'
  };
  await autenticatePage.fillRegistrationForm(I , userData)
  I.see('O campo e-mail deve ser prenchido corretamente')
}).tag('@register-Email');

Scenario('Cadastro com senha invalida', async  ({ I }) => {
         const userData = {
    username: 'vrvrvsadad',
    email: 'daris@gmail.com',
    password: '1'
  };
  await autenticatePage.fillRegistrationForm(I , userData)
  I.see('O campo senha deve ter pelo menos 6 dígitos')
}).tag('@register-Password');

Scenario('Cadastro com campos vazios', async  ({ I }) => {
          const userData = {
    username: '',
    email: 'g',
    password: '1'
  };
  await autenticatePage.fillRegistrationForm(I , userData)
  I.see('O campo nome deve ser prenchido')
}).tag('@register-empty');

After(({I}) => {
  console.log('testes de autenticação/criação de conta realizados')
  I.clearCookie()  
})
