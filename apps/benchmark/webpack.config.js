const { withModuleFederation } = require('@nrwl/angular/module-federation');

module.exports = withModuleFederation({
  name: 'benchmark',
  exposes: {
    './Module': 'apps/benchmark/src/app/remote-entry/entry.module.ts',
  },
});


