/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type autenticatePage = typeof import('./pages/Autenticate');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, autenticatePage: autenticatePage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
