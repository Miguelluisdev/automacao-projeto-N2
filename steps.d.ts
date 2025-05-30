/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type autenticatePage = typeof import('./pages/Autenticate');
type navigatePage = typeof import('./pages/navigate');
type checkoutPage = typeof import('./pages/checkout');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, autenticatePage: autenticatePage, navigatePage: navigatePage, checkoutPage: checkoutPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
