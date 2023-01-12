const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');


module.exports = withModuleFederation({
  ...config,
  name: 'shell',
  library: {
    type: 'module'
  },
  additionalShared: [
    {
      libraryName: 'luxon',
      sharedConfig: {
        eager: true,
        requiredVersion: '3.2.0',
        singleton: true,
      }
    }
  ]
});
