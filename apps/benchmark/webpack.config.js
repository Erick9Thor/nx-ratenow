const { withModuleFederation } = require('@nrwl/angular/module-federation');

module.exports = withModuleFederation({
  name: 'benchmark',
  exposes: {
    './Module': 'apps/benchmark/src/app/remote-entry/entry.module.ts',
  },
  additionalShared: [
    ['@angular/core', {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
    }]
    ['@angular/common', {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
    }],
    ['@angular/common/http', {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
    }],
    ['@angular/common/locales', {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
    }],
    ['@angular/forms', {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto'
    }],
    ['@ngx-translate/core', {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto'
    }],
    ['@angular/platform-browser/animations', {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto'
    }],
    ['@angular/router', {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
    }],
    ['@ngrx/store', {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto'
    }],
    ['@ngrx/effects', {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto'
    }],
    ['@ngrx/router-store', {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto'
    }],
    ['angular-svg-icon', {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto'
    }],
    ['luxon', {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto'
    }],
    ['rxjs', {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
    }],
  ]
});


