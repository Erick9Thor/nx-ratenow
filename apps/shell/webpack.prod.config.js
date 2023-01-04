const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');

module.exports = withModuleFederation({
  ...config,
  shared: {
    "luxon": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "^3.2.0"
    }
  }
});
