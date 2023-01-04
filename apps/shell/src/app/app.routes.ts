import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'benchmark',
    loadChildren: () =>
      loadRemoteModule('benchmark', './Module').then(
        (m) => m.RemoteEntryModule
      ),
    data: {
      breadcrumb: [
        {
          label: 'Home',
          url: '/'
        },
        {
          label: 'Benchmark',
          url: ''
        }
      ]
    }
  }
];
