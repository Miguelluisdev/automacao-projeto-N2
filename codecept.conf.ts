exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://automationpratice.com.br',
      show: false,
      chromium: {
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
      }
    }
  },
  include: {
    I: './steps_file',
    autenticatePage: './pages/Autenticate.ts'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.ts']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './test/*_test.ts',
  name: 'projeto-N2'
}