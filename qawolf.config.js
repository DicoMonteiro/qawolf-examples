module.exports = {
  // element attributes to use in selectors whenever possible
  // attribute: 'data-cy,data-e2e,data-qa,data-test,data-testid,/^qa-.*/',
  // set jest config
  config: "node_modules/qawolf/js-jest.config.json",
  // createTemplate: ({ name, url }) => {
  //   // returns test template as a string
  // },
  // where tests are created
  rootDir: ".qawolf",
  // function to generate custom test template
  // default timeout of a test in milliseconds
  testTimeout: 60000,
  // generate .ts files
  useTypeScript: false
}
