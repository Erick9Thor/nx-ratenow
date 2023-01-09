const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');


module.exports = withModuleFederation({
  ...config,
  additionalShared: [
    {
      libraryName: 'luxon',
      sharedConfig: {
        eager: true,
        requiredVersion: '^3.2.0',
        singleton: true,
      }
    }
  ]
});
