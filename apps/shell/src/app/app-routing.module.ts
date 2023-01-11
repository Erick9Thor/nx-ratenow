import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CheckAppGuard } from '@nx-ratenow/core/guards';
import { CoreI18nModule } from '@nx-ratenow/core/i18n';

const routes: Routes = [
  // TODO: For now we only have one MF so we will redirect to Benchmark until we have more
  {
    path: '',
    redirectTo: '/benchmark',
    pathMatch: 'full'
  },

  //MICROFRONTENDS
  {
    path: 'benchmark',
    canActivate: [CheckAppGuard],
    loadChildren: () =>
      import('benchmark/Module').then((m) => m.RemoteEntryModule)
  }
];

@NgModule({
  imports: [
    CoreI18nModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [TranslateModule, RouterModule]
})
export class AppRoutingModule {}
