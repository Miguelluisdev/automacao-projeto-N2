# automacao-projeto-N2

Projeto de automação de testes utilizando **CodeceptJS**, **TypeScript**, e o padrão **Page Object Model**.

## 📋 Descrição
Este projeto foi desenvolvido como parte do encerramento de um ciclo de sprints, tendo como objetivo testar de forma automatizada diversas funcionalidades do sistema de e-commerce, incluindo:
- Autenticação
- Cadastro de novos usuários
- Visualização e navegação de produtos
- Adição ao carrinho
- Checkout e pagamento

As automações foram feitas com foco em garantir a qualidade e integridade do sistema em um ambiente ágil, seguindo as práticas do **Scrum**.

## 🔧 Tecnologias e ferramentas
- [CodeceptJS](https://codecept.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Gherkin](https://cucumber.io/docs/gherkin/)
- [Faker.js](https://fakerjs.dev/) (para geração de dados dinâmicos)
- Page Object Model (POM) para melhor organização e manutenção dos testes

## ⚙️ Estrutura do projeto
```

├── output/             # Evidências geradas pelos testes (logs, screenshots, etc.)
├── pages/              # Páginas do POM
├── step\_definitions/   # Definições de passos para Gherkin
├── test/               # Casos de teste em si
├── codecept.conf.ts    # Configuração do CodeceptJS
├── package.json        # Dependências do projeto
├── tsconfig.json       # Configuração do TypeScript
├── README.md           # Descrição e instruções do projeto
└── ...


## 🚀 Como executar
1. Clone o repositório:
 bash
   git clone https://github.com/seu-usuario/automacao-projeto-N2.git

2. Instale as dependências:

  bash
   npm install

3. Execute os testes:

   bash
   npx codeceptjs run --steps
   ```

## 💡 Funcionalidades testadas

✅ Login e autenticação
✅ Cadastro de usuário
✅ Navegação entre páginas
✅ Adição ao carrinho
✅ Checkout e finalização de compra
✅ Uso de dados dinâmicos com **Faker.js**

## 🏁 Status do projeto

✅ Finalizado – aguardando a revisão final e documentação adicional (se necessário).

## 🔗 Links úteis

* [CodeceptJS Documentation](https://codecept.io/)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/)


**Autor**: *Miguel Luis*
**Data de conclusão**: *Maio de 2025*
**Licença**: MIT


