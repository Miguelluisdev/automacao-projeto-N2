const autenticatePage = require('../pages/Autenticate')

Feature('login-account');

Before(({I}) => {
   I.amOnPage('/login')
})

Scenario('Login com sucesso', async  ({ I }) => {
    const userData = {
    password: '123456'
  };
    await autenticatePage.fillLoginForm(I,userData)
    I.see('Login realizado')
}).tag('@loginSucess');

Scenario('Login com email invalido', async  ({ I }) => {
    const userData = {
    password: '123456'
  };
    await autenticatePage.fillLoginFormWithInvalidEmail(I,userData)
    I.see('E-mail inválido.')
}).tag('@login-Email');

Scenario('Login com senha invalida', async  ({ I }) => {
    const userData = {
    password: '1'
  };
    await autenticatePage.fillLoginForm(I,userData)
    I.see('Senha inválida.')
}).tag('@loginPassword');


After(() => {
  console.log('testes de autenticação/Login de conta realizados')
})
