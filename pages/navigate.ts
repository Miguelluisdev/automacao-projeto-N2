const { I } = inject();

export = {
  header: {
    subMenu: {
      banner: 'Aproveitar...',
      login: 'Login',
      cadastro: 'Cadastro'
    },

    mainMenu: {
      logo: '.logo',
      linkHome: '#menuHome',
      linkShop: '.has-dropdown',
      linkPage: 'Pages',
    }
  },

  footer: {
    Information: {
      home: 'Home',
      about: 'About us',
      policy: 'Privacy Policy',
      questions: 'Frequently Questions',
      order: 'Order Tracking',
      compare: 'Compare'
    },
    Shop: {
      cart1: 'Cart View One',
      cart2: 'Cart View Two',
      cartEmpty: 'Empty Cart',
      checkout1: 'Checkout View One',
      checkout2: 'Checkout View Two',
    }
  },

  // Header banner
  async fillNavigationHeaderBanner(I: CodeceptJS.I) {
    I.click(this.header.subMenu.banner);
    I.seeInCurrentUrl('/shop');
    I.see('Sort By');

    I.click(this.header.subMenu.login);
    I.seeInCurrentUrl('/login');
    I.see('Login');

    I.click(this.header.subMenu.cadastro);
    I.seeInCurrentUrl('/register');
    I.see('Cadastro de usuário');
  },

  async fillNavigationHeader(I: CodeceptJS.I) {
    I.click(this.header.subMenu.login);
    I.seeInCurrentUrl('/login');

    I.click(this.header.mainMenu.logo);
    I.see('Promoções especiais disponíveis.');

    I.moveCursorTo(this.header.mainMenu.linkHome);
    I.see('Electronics');

    I.click('#item0');
    I.seeInCurrentUrl('/electronics');
  },

  async fillNavigationFooter(I: CodeceptJS.I) {
    // Navegar pelos links do footer - Information
    const footerLinksInformation = [
      this.footer.Information.home,
      this.footer.Information.about,
      this.footer.Information.policy,
      this.footer.Information.questions,
      this.footer.Information.order,
      this.footer.Information.compare
    ];

    for (const link of footerLinksInformation) {
      I.scrollPageToBottom();
      I.waitForElement(`//a[text()="${link}"]`, 5);
      I.click(`//a[text()="${link}"]`);
      I.amOnPage('/');
    }

    // Navegar pelos links do footer - Shop
    const footerLinksShop = [
      this.footer.Shop.cart1,
      this.footer.Shop.cart2,
      this.footer.Shop.cartEmpty,
      this.footer.Shop.checkout1,
      this.footer.Shop.checkout2,
    ];

    for (const link of footerLinksShop) {
      I.scrollPageToBottom();
      I.waitForElement(`//a[text()="${link}"]`, 5);
      I.click(`//a[text()="${link}"]`);
      I.amOnPage('/');
    }
  }
};
