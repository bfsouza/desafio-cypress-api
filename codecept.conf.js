exports.config = {  
  helpers: {    
    REST: {
      endpoint: 'https://gorest.co.in/public-api'
    },    
    ChaiWrapper : {
      require: "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {    
    allure: {
      outputDir: 'report',
      enabled: true
    }
  },
  tests: './*_test.js',
  output: './output',
  name: 'CodeceptJSTest'
}