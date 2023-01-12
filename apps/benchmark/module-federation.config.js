module.exports = {
  name: 'benchmark',
  exposes: {
    './Module': 'apps/benchmark/src/app/remote-entry/entry.module.ts'
  },
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
};
