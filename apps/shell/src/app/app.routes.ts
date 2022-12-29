import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'benchmark',
    loadChildren: () =>
      import('benchmark/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
