import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'benchmark',
    loadChildren: () =>
      loadRemoteModule('benchmark', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
